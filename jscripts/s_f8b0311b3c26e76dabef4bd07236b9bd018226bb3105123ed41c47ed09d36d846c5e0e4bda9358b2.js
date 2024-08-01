var canvas = document.getElementById("renderCanvas"); // Get the canvas element
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
var createScene = function() {
    // scene init
    var scene = new BABYLON.Scene(engine);
    //scene.clearColor = BABYLON.Color4.FromHexString('#ffffff');

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 0, 12));
    camera.attachControl(canvas, true);

    //  camera.radius = 5; // Distance
    camera.beta = (Math.PI / 2); // Rotation, up/down
    camera.alpha = (Math.PI / 2); // Rotation, left/right



    var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("3d/environment.dds", scene);
    var currentSkybox = scene.createDefaultSkybox(hdrTexture, true);

    /*** Default Rendering Pipeline with default values ***/

    // https://doc.babylonjs.com/api/classes/babylon.defaultrenderingpipeline
    var defaultPipeline = new BABYLON.DefaultRenderingPipeline(
        "DefaultRenderingPipeline",
        true, // is HDR?
        scene,
        scene.cameras
    );
    if (defaultPipeline.isSupported) {
        /* imageProcessing */
        defaultPipeline.imageProcessingEnabled = true; //true by default
        if (defaultPipeline.imageProcessingEnabled) {
            defaultPipeline.imageProcessing.contrast = 1; // 1 by default
            defaultPipeline.imageProcessing.exposure = 1; // 1 by default
            /* color grading */
            defaultPipeline.imageProcessing.colorGradingEnabled = false; // false by default
            if (defaultPipeline.imageProcessing.colorGradingEnabled) {
                // using .3dl (best) :
                defaultPipeline.imageProcessing.colorGradingTexture = new BABYLON.ColorGradingTexture("textures/LateSunset.3dl", scene);
                // using .png :
                /*
                var colorGradingTexture = new BABYLON.Texture("textures/colorGrade-highContrast.png", scene, true, false);
                colorGradingTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
                colorGradingTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;                
                defaultPipeline.imageProcessing.colorGradingTexture = colorGradingTexture;
                defaultPipeline.imageProcessing.colorGradingWithGreenDepth = false;
                */
            }
            /* color curves */
            defaultPipeline.imageProcessing.colorCurvesEnabled = true; // false by default
            if (defaultPipeline.imageProcessing.colorCurvesEnabled) {
                var curve = new BABYLON.ColorCurves();
                curve.globalDensity = 0; // 0 by default
                curve.globalExposure = 0; // 0 by default
                curve.globalHue = 99; // 30 by default
                curve.globalSaturation = 1; // 0 by default
                curve.highlightsDensity = 0; // 0 by default
                curve.highlightsExposure = 0; // 0 by default
                curve.highlightsHue = 30; // 30 by default
                curve.highlightsSaturation = 0; // 0 by default
                curve.midtonesDensity = 0; // 0 by default
                curve.midtonesExposure = 0; // 0 by default
                curve.midtonesHue = 30; // 30 by default
                curve.midtonesSaturation = 0; // 0 by default
                curve.shadowsDensity = 10; // 0 by default
                curve.shadowsExposure = 0; // 0 by default
                curve.shadowsHue = 30; // 30 by default
                curve.shadowsDensity = 80;
                curve.shadowsSaturation = 0; // 0 by default;
                defaultPipeline.imageProcessing.colorCurves = curve;
            }
        }
        /* bloom */
        defaultPipeline.bloomEnabled = false; // false by default
        if (defaultPipeline.bloomEnabled) {
            defaultPipeline.bloomKernel = 128; // 64 by default
            defaultPipeline.bloomScale = 0.5; // 0.5 by default
            defaultPipeline.bloomThreshold = 0.9; // 0.9 by default
            defaultPipeline.bloomWeight = 0.15; // 0.15 by default
        }
        /* chromatic abberation */
        defaultPipeline.chromaticAberrationEnabled = true; // false by default
        if (defaultPipeline.chromaticAberrationEnabled) {
            defaultPipeline.chromaticAberration.aberrationAmount = 5; // 30 by default
            defaultPipeline.chromaticAberration.adaptScaleToCurrentViewport = false; // false by default
            defaultPipeline.chromaticAberration.alphaMode = 0; // 0 by default
            defaultPipeline.chromaticAberration.alwaysForcePOT = false; // false by default
            defaultPipeline.chromaticAberration.enablePixelPerfectMode = false; // false by default
            defaultPipeline.chromaticAberration.forceFullscreenViewport = true; // true by default
        }
        /* DOF */
        defaultPipeline.depthOfFieldEnabled = false; // false by default
        if (defaultPipeline.depthOfFieldEnabled && defaultPipeline.depthOfField.isSupported) {
            defaultPipeline.depthOfFieldBlurLevel = 0; // 0 by default
            defaultPipeline.depthOfField.fStop = 1.4; // 1.4 by default
            defaultPipeline.depthOfField.focalLength = 50; // 50 by default, mm
            defaultPipeline.depthOfField.focusDistance = 2000; // 2000 by default, mm
            defaultPipeline.depthOfField.lensSize = 50; // 50 by default
        }
        /* FXAA */
        defaultPipeline.fxaaEnabled = true; // false by default
        if (defaultPipeline.fxaaEnabled) {
            defaultPipeline.fxaa.samples = 1; // 1 by default
            defaultPipeline.fxaa.adaptScaleToCurrentViewport = false; // false by default
        }
        /* glowLayer */
        defaultPipeline.glowLayerEnabled = false;
        if (defaultPipeline.glowLayerEnabled) {
            defaultPipeline.glowLayer.blurKernelSize = 16; // 16 by default
            defaultPipeline.glowLayer.intensity = 1; // 1 by default
        }
        /* grain */
        defaultPipeline.grainEnabled = true;
        if (defaultPipeline.grainEnabled) {
            defaultPipeline.grain.adaptScaleToCurrentViewport = true; // false by default
            defaultPipeline.grain.animated = true; // false by default
            defaultPipeline.grain.intensity = 30; // 30 by default
        }
        /* MSAA */
        defaultPipeline.samples = 1; // 1 by default
        /* sharpen */
        defaultPipeline.sharpenEnabled = true;
        if (defaultPipeline.sharpenEnabled) {
            defaultPipeline.sharpen.adaptScaleToCurrentViewport = false; // false by default
            defaultPipeline.sharpen.edgeAmount = 0.85; // 0.3 by default
            defaultPipeline.sharpen.colorAmount = 1; // 1 by default
        }
    }

    /*** end of Default Rendering Pipeline ***/

	/*
    var heartModel = BABYLON.AbstractMesh;
    // Define the variable in the global scope.
    var heart;
    heartModel = BABYLON.SceneLoader.ImportMesh("", "3d/", "cone.glb", scene, function(newMeshes) {
        heart = newMeshes[0];
        heart.rotationQuaternion = undefined;
        heart.position = new BABYLON.Vector3(0, -0.75, 0);
    });
	*/

    // Append glTF model to scene.
    var gauntletModel = BABYLON.AbstractMesh;
    // Define the variable in the global scope.
    var gauntlet;
    gauntletModel = BABYLON.SceneLoader.ImportMesh("", "3d/", "cone-final.glb", scene, function(newMeshes) {
        // Creating default environment enables tone mapping so disable for demo
        gauntlet = newMeshes[0];
        gauntlet.rotationQuaternion = undefined;
        gauntlet.position = new BABYLON.Vector3(0, -5.25, -2);
        //gauntlet.rotation.x = -0.65;
		gauntlet.rotation.y = 1.9;
		
		
        scene.beforeRender = () => {
			
			gauntlet.rotation.y += 0.001;

		

            
            //heart.rotation.y += 0.005;
        };
    });



    return scene;
};

/******* End of the create scene function ******/

var scene = createScene(); //Call the createScene function


// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function() {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function() {
    engine.resize();
});