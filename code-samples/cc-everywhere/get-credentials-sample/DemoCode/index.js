//credential

async function readJSON() {
  const resp = fetch("../credential.json")
  return await (await resp).json()
}

// Initialize the SDK

async function initializeCcEverywhere() {
  try {
    const credentialJSON = await readJSON();
    const credential = credentialJSON?.project?.workspace?.details?.credentials[0];
    const ccEverywhere = await window.CCEverywhere.initialize({
      clientId: credential?.api_key?.client_id,
      appName: credential?.name,
    });

    return ccEverywhere;
  } catch (error) {
    console.error("Error initializing ccEverywhere:", error);
    throw error;
  }
}

var ccEverywhere;
initializeCcEverywhere()
  .then((ccEverywhere1) => {
    ccEverywhere = ccEverywhere1;
  })
  .catch((error) => {
    console.error("Initialization error:", error);
  });

// create project

async function createNewProject() {

  try {

    let editorPanel = document.getElementById("editorPanelView");
    var editorPanelID = editorPanel.value;

    ccEverywhere.createDesign({
      callbacks: {
        onCancel: () => { },
        onPublish: (publishParams) => {
          const localData = { project: publishParams.asset[0].projectId, image: publishParams.asset[0].data };
          image_data.src = localData.image;
          project_id = localData.project;
        },
        onError: (err) => {
          console.error("err", err)
        },
      },
      outputParams: {
        outputType: "base64",
      },
      inputParams: {
        ...(editorPanelID !== "" && { editorPanelView: editorPanelID }), // editorPanelID are yourStuff ,templates,media,text,elements,custom
      }
    })

  } catch (error) {
    console.error("Error creating design:", error);
  }

}

//get the image and convert base 64

async function loadFrame(option, id) {
  try {
    let imageURL = '';

    const fileInput = document.getElementById(id);

    if (fileInput && fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        imageURL = e.target.result;
        if (option === "edit") {
          editDesign(imageURL);
        }
        else {
          handleQuickAction(imageURL)
        }
      };

      reader.readAsDataURL(fileInput.files[0]);
    }

    if (!fileInput || !fileInput.files || !fileInput.files[0]) {
      if (option === "edit") {
        editDesign(imageURL);
      }
      else {
        handleQuickAction(imageURL)
      }
    }
  } catch (error) {
    console.error("Error creating design:", error);
  }
}

// Edit project

async function editDesign(dataURL) {
  try {

    return await ccEverywhere.createDesign({
      inputParams: {
        asset: {
          data: dataURL !== '' ? dataURL : undefined, // Use imageURL if defined
          dataType: "base64",
          type: "image"
        },
      },
      outputParams: {
        outputType: "base64"
      },
    });

  } catch (error) {
    console.error("Error creating design:", error);
  }
}

//image quick actions

async function handleQuickAction(imageUrl) {

  try {

    let quickAction = document.getElementById("quickActionImg");
    var quickActionID = quickAction.value;

    await ccEverywhere.openQuickAction({
      id: quickActionID, //keys are remove-background , resize-image, crop-image , convert-to-jpg , convert-to-png
      inputParams: {
        asset: {
          data: imageUrl, //The 'imageUrl' is encoded in base64 and used to send the image to the iframe for performing subsequent quick actions
          dataType: "base64",
          type: "image"
        },
        exportOptions: [
          {
            target: 'Editor',
            variant: 'primary',
            optionType: 'button',
            buttonType: 'native',
            id: "editor-btn"
          },
          {
            target: 'Download',
            variant: 'primary',
            optionType: 'button',
            buttonType: 'native',
            id: "download-btn"
          },

          {
            target: 'Host',
            id: 'save-to-host-app',
            label: 'Save',
            variant: 'cta',
            optionType: 'button',
            buttonType: 'custom'
          }]
      }
    })

  } catch (error) {
    console.error("Error creating design:", error);
  }

}

//reset file 

function resetFile(id) {
  const file = document.getElementById(id);
  file.value = '';
}
