 // create the rest of the experiment
 
 const VERSION = 1.0;

//  const SLIDE_MIN = 1;
//  const SLIDE_MAX = 100;
//  // const SLIDE_BIG_STEP = 5;
//  const SLIDE_START = 50;
//  const SLIDE_WIDTH = 650;
 const SLIDE_LABELS = ['Not at all', 'Completely']
 const SLIDE_LABELS_ENGAGEMENT  = ['Not engaging at all','Completely engaging']
 const SLIDE_LABELS_RELATABILITY = ['Not relatable at all', 'Completely relatable']
 const SLIDE_LABELS_SURPRISE = ['Not surprising at all', 'Completely surprising']
 const SLIDE_LABELS_IMPORTANCE = ['Not important at all', 'Completely important']
 const SLIDE_LABELS_VALENCE = ['Negative', 'Positive']
 const SLIDE_LABELS_AROUSAL = ['Low / No strong feelings','High / Very strong feelings']
 const SLIDE_LABELS_FOCUS = ['Not focusing at all', 'Completely focusing']
 const SLIDE_LABELS_COMPREHENSION = ['Not understanding at all', 'Completely understanding']
 const SLIDE_LABELS_BOREDOM = ['Not boring at all','Completely boring']


var jsPsych = initJsPsych({
  // timeline: timeline,
  use_webaudio: false,
  on_finish: function(){
    jsPsych.data.displayData();
  }
});


var preload = {
  type: jsPsychPreload,
  auto_preload: true,
  // video: ,
  message: 'Please wait while the experiment loads. This may take a minute.',
  show_progress_bar: true,
  max_load_time: 300000, // 2 minutes
  error_message: 'The experiment failed to load - sorry about this! Please try moving to a location with a better WiFi connection.',
  continue_after_error: false,
  show_detailed_errors: true,
  // on_error: function(file) {
  //   file_error_count++;
  //   console.log('Error: ',file);
  // },
  // on_success: function(file) {
  //   file_load_count++;
  //   console.log('Loaded: ',file)
  // }
}


// Preloading Practice Clip & Practice Audio. Will need to manually load task videos.
// For more information: https://www.jspsych.org/7.3/overview/media-preloading/

var audiotest_trial = {
  type: jsPsychAudioKeyboardResponse,
  stimulus: 'audio/waterfall.mp3'
}

var M1movie_trials = {
  type: jsPsychVideoKeyboardResponse,
  stimulus: ['../Box/movies/Practice_Video.mp4','movies/7T_MOVIE1_CC1.mp4']
}

var M2movie_trials = {
  type: jsPsychVideoKeyboardResponse,
  stimulus: ['../Box/movies/Practice_Video.mp4', 'movies/7T_MOVIE3_CC2.mp4']
}

var M3movie_trials = {
  type: jsPsychVideoKeyboardResponse,
  stimulus: ['../Box/movies/Practice_Video.mp4', 'movies/7T_MOVIE3_CC2.mp4']
}

var M4movie_trials = {
  type: jsPsychVideoKeyboardResponse,
  stimulus: ['../Box/movies/Practice_Video.mp4', 'movies/7T_MOVIE4_HO2.mp4']
}

var block_images = {
  timeline: [
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: 'images/CABLab_behavior_online_consent.png'
    },
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: 'images/crossDiagram.png'
    },
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: 'images/left_right_arrow.png'
    },
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: 'images/movie.png'
    },
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: 'images/university.png'
    }
  ]
}

var preload_images = {
  type: jsPsychPreload,
  trials: block_images
}

jsPsych.run([preload, preload_images, audiotest_trial, M1movie_trials]);

 
var timeline = []

timeline.push(Welcome());
timeline.push(Consent());
timeline.push(Instructions());

timeline.push(getFullscreen_Info());
timeline.push(getFullscreen());

timeline.push(playPracticeAudio());
timeline.push(soundQuiz());
timeline.push(checkif_need_RepeatAudio());

timeline.push(getInstructionsGeneralProcedureRelatability());
timeline.push(getInstructionsProcedureDefinitionRelatability());

timeline.push(disablemouse());
timeline.push(practiceClipTaskRelatability());
timeline.push(enablemouse());

timeline.push(askAboutInstructionRepeatRelatability());
timeline.push(getRepeatedInstructionsProcedureRelatability());

timeline.push(disablemouse());
timeline.push(ClickToStartExperiment());
timeline.push(enablemouse());
timeline.push(Experiment_Start_Relatability());

// Measure-Specific Questions
timeline.push(End_of_Task_Procedure_OverallRelatability());
timeline.push(End_of_Task_Procedures_FR_Relatability());

// Attention Checks
timeline.push(movie1Questions());
timeline.push(movie1Questions2());
timeline.push(movie1Questions3());

// Demographic Questions
timeline.push(DemographicQuestions());


jsPsych.run(timeline)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Prolific is used to get participants. You must finish writing your experiment code first, then set up running your code online.
// Some helpful options for running code online are discussed here: https://www.jspsych.org/7.3/overview/running-experiments/#hosting-the-experiment-and-saving-the-data

// Integrating with Prolific: https://www.jspsych.org/7.3/overview/prolific/

// var jsPsych = initJsPsych();


// var jsPsych = initJsPsych({
//     on_finish: function() {
//         jsPsych.data.displayData();
//     }
//   });
  
//   // capture info from Prolific
//   var subject_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
//   var study_id = jsPsych.data.getURLVariable('STUDY_ID');
//   var session_id = jsPsych.data.getURLVariable('SESSION_ID');
//   var movie_condition_id = jsPsych.data.getURLVariable('MOVIE_CONDITION_ID')
//   var measure_condition_id = jsPsych.data.getURLVariable('MEASURE_CONDITION_ID')
  
//   jsPsych.data.addProperties({
//       subject_id: subject_id,
//       study_id: study_id,
//       session_id: session_id,
//       movie_condition_id: movie_condition_id,
//       measure_condition_id: measure_condition_id
//   });
  
//   // create the rest of the experiment
//   var timeline = []
  
// //   jsPsych.run(timeline)
  
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
//   // var psiturk = PsiTurk(uniqueId, adServerLoc);
//   // const dm = new DataManager();
  
//   // $(window).ready(function(){
//   //   timeline = [];
//   //   // const conditon = psiturk.taskdata.get('condition');
//   //   //
//   //   // const content = counterbalanceKey[conditon];
//   //   const conditon = '1';
//   //   const content = 'movie1_v2';
//   //   const measure = 'engagement';
//   //   // const practiceContent = 'movieWL';
//   //   timeline.push(getProlificId(conditon));

  
  
  // Option #1: Participant Clicks Link to Redirect back to Prolific - UPDATE LINK
  // var final_trial = {
  //     type: jsPsychHtmlKeyboardResponse,
  //     stimulus: `<p>You've finished the last task. Thanks for participating!</p>
  //         <p><a href="https://app.prolific.co/submissions/complete?cc=XXXXXXX">Click here to return to Prolific and complete the study</a>.</p>`,
  //     choices: "NO_KEYS"
  // };
  
  // Option #2: Participant is Automatically Redirected back to Prolific - UPDATE LINK 
  // var jsPsych = initJsPsych({
  //   on_finish: function(){
  //       window.location = "https://app.prolific.co/submissions/complete?cc=XXXXXXX"
  //   }
  // });
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Functions from Taylor - jsPsych 6.3
  
  
  // // Not using - unsure what it is for
  // function continueInstructions(instructionsHTML){
  //     var trial = {
  //       type: 'html-button-response',
  //       stimulus: instructionsHTML,
  //       choices: ['Continue']
  //     };
  //     return trial;
  //   }
    
    // function sliderAllInstructions(timeline, practiceContent1){
    //   // instructions!!!! for engage slider
    //   timeline.push(getInstructionsProcedureEngage0());
    //   timeline.push(getInstructionsProcedureEngage2());
    //   timeline.push(getInstructionsProcedureEngage3());
    //   timeline.push(instructionsSlider1());
    //   timeline.push(instructionsSlider2());
    //   timeline.push(getInstructionsProcedureEngage4());
    //   timeline.push(getInstructionsProcedureEngage5());
    //   // timeline.push(getVideoProcedure(practiceContent1));
    //   timeline.push(getInstructionsProcedureEngage6(practiceContent1));
    // }
    
    // function getFullscreen(){
    //   return { type: 'fullscreen',
    //                   fullscreen_mode: true,
    //                   message: `<h3>The study will switch to full screen when you continue.</h3>
    //                             <h3><span class='blue'><i>To receive payment you must remain in full screen mode</i></span> for the rest of the study.</h3><br><br>
    //                             <h3>Next let's test out your volume. </h3><br><br><br><br>`}
    // }
    
    // var psiturk = PsiTurk(uniqueId, adServerLoc);
    // const dm = new DataManager();
    
    // $(window).ready(function(){
    //   timeline = [];
    //   // const conditon = psiturk.taskdata.get('condition');
    //   //
    //   // const content = counterbalanceKey[conditon];
    //   const conditon = '1';
    //   const content = 'movie1_v2';
    //   const practiceContent = 'movieWL';
    //   timeline.push(getProlificId(conditon));
    
    
    //   timeline.push(getVolumeAdustTrials());
    
    
    //   // instructions!!!! for engage slider
    //   timeline.push(getInstructionsProcedureEngage0());
    //   timeline.push(getInstructionsProcedureEngage2());
    //   timeline.push(getInstructionsProcedureEngage3());
    //   timeline.push(instructionsSlider1());
    //   timeline.push(instructionsSlider2());
    //   timeline.push(getInstructionsProcedureEngage4());
    //   timeline.push(getInstructionsProcedureEngage5());
    //   timeline.push(getVideoProcedure(practiceContent));
    //   timeline.push(getInstructionsProcedureEngage6(practiceContent));
    
    //   timeline.push(askAboutInstructionRepeat());
    //   timeline.push(getRepeatedInstructionsProcedure());
    //   // instructions!!!! for engage slider
    
    //   timeline.push(getFullscreen());
    //   timeline.push(continueInstructions('<h3>Now the clip will begin and you will begin rating <br><br><br></h3>'));
    //   timeline.push(getVideoProcedure(content));
    //   timeline.push(overallEngagementSlider("video you watched?"));
    //   timeline.push(getRecallQuestions(content));
    
    
      // end
      // timeline.push(getEndProcedure());
    
      //  dm.addFields(['trial_subtype',
      //                'test_order',
      //                'internal_node_id',
      //                'key_press',
      //                'rt',
      //                'stimulus',
      //                'condition',
      //                'item',
      //                'subject',
      //                'time_elapsed',
      //                'trial_index',
      //                'trial_type',
      //                'response',
      //                'total_time',
      //                'slider_start',
      //                'start',
      //                'expStartTime',
      //                'mapped_key',
      //                'version'])
    
    //   jsPsych.init({
    //     preload_images: ['static/images/load_small.gif'],
    //     timeline: timeline,
    //     on_finish: onFinish,
    //     on_trial_finish: onFinish,
    //   });
    // });
    