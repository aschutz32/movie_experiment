 // create the rest of the experiment
const VERSION = 1.0;

const SLIDE_LABELS = ['Not at all', 'Completely']
const SLIDE_LABELS_ENGAGEMENT  = ['Not at all engaging','Completely engaging']


var jsPsych = initJsPsych({
  // timeline: timeline,
  use_webaudio: false,
  on_finish: function(){
    jsPsych.data.displayData();
  }
});


// Randomize Subjects -- Create Unique Name for Files
const subject_id = jsPsych.randomization.randomID(10);
const filename = `${subject_id}.csv`;

// pick a random condition for the subject at the start of the experiment
// var condition_assignment = jsPsych.randomization.sampleWithoutReplacement(['conditionA', 'conditionB', 'conditionC'], 1)[0];

// record the condition assignment in the jsPsych data
// this adds a property called 'subject' and a property called 'condition' to every trial
jsPsych.data.addProperties({
  subject: subject_id,
  on_finish: function(){
    jsPsych.data.displayData()
//   condition: condition_assignment
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
  stimulus: '../audio/waterfall.mp3'
}

// Preloading Clips from Movies
var M1_Clips = {
    type: jsPsychVideoKeyboardResponse,
    stimulus: ['../movies/Movie_1/M1Clip1.mp4', '../movies/Movie_1/M1Clip2.mp4', '../movies/Movie_1/M1Clip3.mp4', '../movies/Movie_1/M1Clip4.mp4', '../movies/Movie_1/M1Clip5.mp4']
}

var block_images = {
  timeline: [
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: '../images/CABLab_behavior_online_consent.png'
    },
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: '../images/crossDiagram.png'
    },
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: '../images/left_right_arrow.png'
    },
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: '../images/movie.png'
    },
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: '../images/university.png'
    },
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: '../images/REST.png'
    },
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: '../images/keyboard_image.png'
    },
    {
      type: jsPsychImageKeyboardResponse,
      stimulus: '../images/Slider_Video_Example.png'
    }
  ]
}

var preload_images = {
  type: jsPsychPreload,
  trials: block_images
}

var browsercheck = {
    type: jsPsychBrowserCheck,
    inclusion_function: (data) => {
      return data.mobile === false
    },
    exclusion_message: (data) => {
      if(data.mobile){
        return '<p>You must use a desktop/laptop computer to participate in this experiment.</p>'
      } 
    }
  }

jsPsych.run([preload, preload_images, audiotest_trial, M1_Clips, browsercheck]);

 
var timeline = []

// timeline.push(BrowserCheck());

timeline.push(Welcome());
timeline.push(Consent());
timeline.push(Instructions());

// Fullscreen
timeline.push(getFullscreen_Info());
timeline.push(getFullscreen());

// Practice Audio w Test
timeline.push(playPracticeAudio());
timeline.push(soundQuiz());
timeline.push(checkif_need_RepeatAudio());

// Task Instructions
timeline.push(getInstructionsGeneralProcedureEngagement());
timeline.push(getInstructionsProcedureDefinitionEngagement());
timeline.push(KeyboardInstructions());

// Practice Clip With Measure
timeline.push(disablemouse());
timeline.push(practiceClipTaskEngagement());
timeline.push(enablemouse());

// Instruction Repeat? 
timeline.push(askAboutInstructionRepeatEngagement());
timeline.push(getRepeatedInstructionsProcedureEngagement());

// Click to Start
timeline.push(ClickToStartExperiment());

// // full movie - not in use
// timeline.push(Experiment_Start_Engagement()); 

// M1Clip1
timeline.push(disablemouse());
timeline.push(Experiment_Start_M1Clip1_Eng());
timeline.push(enablemouse());

timeline.push(OverallClipEngagement());
timeline.push(SeenClipBeforeQ());

// M1Clip2
timeline.push(disablemouse());
timeline.push(Experiment_Start_M1Clip2_Eng());
timeline.push(enablemouse());

timeline.push(OverallClipEngagement());
timeline.push(SeenClipBeforeQ());

// M1Clip3
timeline.push(disablemouse());
timeline.push(Experiment_Start_M1Clip3_Eng());
timeline.push(enablemouse());

timeline.push(OverallClipEngagement());
timeline.push(SeenClipBeforeQ());

// M1Clip4
timeline.push(disablemouse());
timeline.push(Experiment_Start_M1Clip4_Eng());
timeline.push(enablemouse());

timeline.push(OverallClipEngagement());
timeline.push(SeenClipBeforeQ());

// M1Clip5
timeline.push(disablemouse());
timeline.push(Experiment_Start_M1Clip5_Eng());
timeline.push(enablemouse());

timeline.push(OverallClipEngagement());
timeline.push(SeenClipBeforeQ());


// Measure-Specific Questions
// timeline.push(End_of_Task_Procedure_OverallEngagement());
// timeline.push(End_of_Task_Procedures_FR_Engagement());

// End of Exp Questions
timeline.push(OverallEngagement());
timeline.push(movie1AttentionCheck());
timeline.push(movieQuestionsFR());

// Demographic Questions
timeline.push(DemographicQuestions());


jsPsych.run(timeline)

// Add data to DataPipe
const save_data = {
  type: jsPsychPipe,
  action: "save",
  experiment_id: "nzkpTTzvxZfu",
  filename: filename,
  data_string: ()=>jsPsych.data.get().csv()
};


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
    