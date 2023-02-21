
// Browser Check
function BrowserCheck(){
  var trial = {
  type: jsPsychBrowserCheck,
  inclusion_function: (data) => {
    return data.mobile === false
  },
  exclusion_message: (data) => {
    if(data.mobile){
      return '<p>You must use a desktop/laptop computer to participate in this experiment.</p>';
    } 
  }
};
  return trial;
};


function Welcome() {
  var trial = {
    type: jsPsychInstructions,
    pages: [
      '<h2>Welcome to the experiment. Click next to begin.</h2><br><br>',
      'Please review the consent form on the next page.<br><br><i><b>Select the appropriate button on the bottom of the page indicating whether you provide consent.</b></i><br><br>',
    ],
    show_clickable_nav: true,
    data: {function: 'Welcome' }
  }
  return trial;
}

function Consent() {
  var trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="images/CABLab_behavior_online_consent.png"></img>',
    choices: ['<h3>Yes, I consent to participate</h3>', '<h3>No, I do not consent to participate</h3>'],
    data: {function: 'Consent' },
    on_finish: function(data){
      if(data.response == 1){
        jsPsych.endExperiment('<p>You did not consent to participate. The session will now finish. Thank you for your time!</p>')
      }
    },
  }
  return trial;
}

function Instructions() {
  var trial = {
      type: jsPsychInstructions,
      pages: [
          '<h3>During this task, you will watch videos that are about 15 minutes long in total.</h3><br><br>', 
          '<h3>Throughout the videos you will <i>continuously</i> rate your experience.</h3><br><br>',
          'At the end of the videos, you will answer a few questions to ensure you paid attention.<br> <h4><b>Compensation is contingent on watching and listening to <i>all videos</i>, including periods when the word "REST" is on the screen, and completing <i>all of the questions</i></b>. <br><br>Respond during the video clips <i>and</i> when "REST" is shown: <br><img src="images/REST.png"></img></h3><br><br>',
      ],
      show_clickable_nav: true,
      data: {function: 'Instructions' }
  }
  return trial;
};


function getFullscreen_Info(){
  var trials_in_fullscreen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<h3><b><span class='red'><i>Please Turn Your Volume On.</i></span></h3></b><br>
    We will switch to fullscreen mode and test out your volume when you continue.<br><br>
    You must keep your <b>volume</b> on and remain in <b>fullscreen</b> for the <i>entire duration</i> of the study.<br><br>`,
    choices: ['Continue'],
    data: {function: 'getFullscreen_Info' }
  }
  return trials_in_fullscreen;
};

function getFullscreen(){
  var enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true,
    data: {function: 'getFullscreen' }
  }
  return enter_fullscreen;
};


// auto_preload: true setting tells the plugin to automatically find the stimuli and preload based on main experiment timeline
// only used for practice video and sound due to smaller size
function playPracticeAudio(){
  var trial = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: 'audio/waterfall.mp3',
    choices: "ALL_KEYS",
    prompt: `<h2>Please adjust volume to a <span class='blue'><i>comfortable level</i></span></h2><br><p>Press any key to continue.</p><br><br>`,
    response_ends_trial: true, 
    data: {Practice: 'playPracticeAudio' }
  }
  return trial;
};

function soundQuiz(){
  var trial = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: "<b>What sound did you just hear?</b>",
        name: 'volume_adjust',
        options: ['People laughing', 'Waterfall flowing', 'Birds chirping', 'Phone ringing'],
        required: true
      },
    ],
    data: {Practice: 'soundQuiz' },
    on_finish: function(data){
        const resp = data.response['volume_adjust'];
      if(resp == "Waterfall flowing"){
        data.correct = true;
      } else {
        data.correct = false;
      };
    },
  }
  return trial;
};

function checkif_need_RepeatAudio(){
  var repeat_audio = {
    timeline: [
      PracticeAudioRepeat(),
      playPracticeAudio2(),
      soundQuiz2()],
    data: {function: 'checkif_need_RepeatAudio' },
    conditional_function: function(){
      // check which button was pressed
      var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
      if (last_trial_correct){
        return false;
      } else {
        return true;
      }
    }
  }
  return repeat_audio;
}


// function checkif_need_RepeatAudio(){
//   var repeat_audio = {
//     timeline: [
//       PracticeAudioRepeat(),
//       playPracticeAudio2(),
//       soundQuiz2()],
//     conditional_function: function(){
//       // check which button was pressed
//       var data = jsPsych.data.get().last(1).values()[0];
//       if (data['response']=="Waterfall flowing"){
//         return false;
//       } else {
//         return true;
//       }
//     }
//   };
//   return repeat_audio;
// };

function PracticeAudioRepeat(){
  var trial = {
    type: jsPsychHtmlButtonResponse,
    choices: ['Repeat Audio', 'Exit'],
    stimulus: "It looks like you do not have your volume on.<br><br><h4><i>Please turn your volume on. You must have your volume on to participate in this study.</i></h4><br>When you are ready to try again, please press the <b>'Repeat Audio'</b> button. <br><br>If you would instead like to exit the experiment, click the <i>'Exit'</i> button.<br><br>",
    data: {function: 'PracticeAudioRepeat' },
    on_finish: function(data){
      if(data.response == 1){
        jsPsych.endExperiment('<p>It looks like you have chosen to exit the experiment. Unfortunately, this means you will not be able to complete this study. <br> The session will now finish. Thank you for your time!</p>')
      } 
    },
  }
  return trial;
}

function playPracticeAudio2(){
  var trial = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: 'audio/waterfall.mp3',
    choices: "ALL_KEYS",
    prompt: `<h2>Please adjust volume to a <span class='blue'><i>comfortable level</i></span></h2><br><p>Press any key to continue.</p><br><br>`,
    response_ends_trial: true, 
    data: {function: 'playPracticeAudio2' }
  }
  return trial;
};
function soundQuiz2(){
  var trial = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: "<b>Which sound did you just hear?</b>",
        name: 'volume_adjust',
        options: ['People laughing', 'Waterfall flowing', 'Birds chirping', 'Phone ringing'],
        required: true
      },
    ],
    data: {function: 'soundQuiz2' },
    on_finish: function(data){
        const resp = data.response['volume_adjust'];
      if(resp == "Waterfall flowing"){
        data.correct = true;
      } else {
        data.correct = false;
        jsPsych.endExperiment('<p>It looks like you do not have your volume on. Unfortunately, this means you will not be able to complete this study. <br> The session will now finish. Thank you for your time!</p>')
      }
    },
  }
  return trial;
};


function disablemouse(){
  var cursor_off = {
    type: jsPsychCallFunction,
    func: function() { 
      document.body.style.cursor="none";
    }
  }
  return cursor_off;
}

function enablemouse(){
  var cursor_on = {
    type: jsPsychCallFunction,
    func: function() {
      document.body.style.cursor="auto";
    }
  }
  return cursor_on;
}

function KeyboardInstructions(){
  var trial = {
    type: jsPsychInstructions,
    pages: [
      '<h3>To move the slider, you will press the LEFT or RIGHT arrow keys on your keyboard.</h3>' + '<br>' +
      '<img src="images/keyboard_image.png"></img>'
    ],
    button_label_next: "Continue",
    show_clickable_nav: true,
  }
  return trial;
}

function ClickToStartExperiment(){
  var trial = {
    type: jsPsychHtmlButtonResponse,
    choices: ['Start the experiment'],
    stimulus:"<h3>As soon as you click the <i>'Start the experiment'</i> button, the experiment will begin.</h3><br><br>Please ensure that you are in a <b>quiet room</b> with <b>minimal/no distractions</b>.<br><br><br><b><i>Reminders:</b> <br>- Continuously rate during the videos, including when the word 'REST' appears.<br>- Do not exit fullscreen until the experiment is complete.<br>- Compensation is contingent upon successful completion of the experiment.</i><br><br><br>",
    data: {function: 'ClickToStartExperiment' }
  }
  return trial;
};

function SeenClipBeforeQ(){
  var trial = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: "Have you seen this video before?",
        name: 'SeenBeforeQ',
        options: ['Yes','No'],
        required: true,
        horizontal: true
      }
    ]
  }
  return trial;
}

function OverallEngagement(){
  var trial = {
      type: jsPsychHtmlSliderResponse,
      stimulus: `<b>Overall, how <i>engaging</i> did you find ALL of the clips?</b><br><br>`,
      require_movement: true,
      labels: SLIDE_LABELS_ENGAGEMENT,
      data: {TASK: 'OverallEngagement'},
      on_load: function() {
          document.getElementById("jspsych-html-slider-response-response").focus()
        },
  } ;
  return trial;
}

function movieQuestionsFR(){
  var trial = {
      type: jsPsychSurveyText,
      data: {TASK: 'movie1Questions3'},
      questions: [
          {prompt: '<b>If there is anything you would like to let us know about your experience, please let us know.</b>', rows: 5, required: false}
      ],
      data: {TASK: 'FreeResponse'}
  };
  return trial;
}



// USE AT THE END OF THE EXPERIMENT

/* -----Demographics----- */
var DemoQ1_options = ["Man", "Woman", "Gender Non-conforming", "Other", "Choose not to respond"];
var DemoQ2_options = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75-84", "85 or older"];
var DemoQ3_options = ["Hispanic/Latino", "Not Hispanic/Latino", "Choose not to respond"];
var DemoQ4_options = ["American Indian/Native American","White", "Black/African American", "Asian", "Native Hawaiian or Pacific Islander", "More than one race", "Other","Choose not to respond"];
var DemoQ5_options = ["Less than a high school diploma", "High school degree or equivalent (e.g. GED)", "Some college, no degree", "Associate degree (e.g. AA, AS)", "College degree", "Master's degree (e.g. MA, MS, MEd)", "Doctorate or professional degree (e.g. MD, DDS, PhD)"];

function DemographicQuestions(){
  var trial = {
    type: jsPsychSurveyMultiChoice,
    preamble: "<h3>Please answer some further questions on your demographic information.</h3>",
    data: {function: 'DemographicQuestions' },
    button_label: 'Continue',
    questions: [
      {
        prompt: "<b>What is your gender?</b>",
        name: 'DemQ1',
        options: DemoQ1_options,
        required: true
      },
      {
        prompt: "<b>What is your age?</b>",
        name: 'DemQ2',
        options: DemoQ2_options,
        required: true
      },
      {
        prompt: "<b>What is your Ethnicity?</b>",
        name: 'DemQ3',
        options: DemoQ3_options,
        required: true
      },
      {
        prompt: "<b>How would you describe yourself? Please select all that apply.</b>",
        name: 'DemQ4',
        options: DemoQ4_options,
        required: true
      },
      {
        prompt: "<b>What is the highest degree or level of school you have completed?</b>",
        name: 'DemQ5',
        options: DemoQ5_options,
        required: true
      },
    ],
  }
  return trial;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions from Taylor - jsPsych 6.3

// function getInstructionsIntroProcedure(){
//     var trial = {
//       type: "html-slider-response",
//       stimulus:         `<div id='container-exp'>
//       <h1>Movie Watching Task <h1/>
//       <br>
//       <h3>During this task, you will <i><span class="red">watch movie clips</span></i>.
//       <br>  <h3> Each clip is <i><span class="blue">about 15 minutes long</span></i></h3>
//       <h3>The entire task will take around <i><span class="red">20 minutes</i></span>.</h3>
//       <br>
//       <img  style= height=300" width="200" vertical-align=bottom src=/static/images/movie.png/></div>
//       <h3>  After each clip, you will <i><span class="blue">answer a few questions</span></i> to ensure you paid attention.</h3>
//       <h3>Compensation is contingent on <i><span class="red">watching all of the clip</span></i> and <i><span class="red">completing all of the questions</span></i>.<br></h3>
//       </div>`,
//           slider_start: SLIDE_START,
  
//       button_label: 'continue',
//       min: SLIDE_MIN,
//       max: SLIDE_MAX,
//       on_load: function(){
//         const last_trial =  jsPsych.data.getLastTrialData().values()[0];
//         function resize() {
//           const data = {
//             response: 'resized_window',
//             rt: null,
//             slider_start: SLIDE_START,
//             stimulus: 'resized_window',
//             subject: last_trial['subject'],
//             time_elapsed: jsPsych.totalTime(),
//             expStartTime: jsPsych.startTime(),
//             trial_index: last_trial['trial_index'] + 1,
//             version: VERSION,
//             condition: last_trial['condition'],
//             trial_type: 'resized_window',
//         }
//           onFinish(data);
//            // don't want to end the exp when they go fullscreen
//            // jsPsych.endExperiment('The experiment was ended by exiting fullscreen mode.');
//          };
//         window.onresize = resize;
//          $("#jspsych-html-slider-response-response").hide();
//       },
//       step:1,
//       labels: ['',],
//       is_html: true
//     }
//     return trial;
// }


// function getInstructionsGeneralTaskProcedure(numClips, totalTaskLengthEstimate){
//     var trial = {
//       type: "html-slider-response",
//       stimulus:         `<div id='container-exp'>
//       <h1>Movie Watching Task <h1/>
//       <br>
//       <h3>During this task, you will <i><span class="red">watch movie clips</span></i>.
  
//       <br>
//       <img  style= height=300" width="200" vertical-align=bottom src=/static/images/movie.png/></div>
//       </div>`,
//           slider_start: SLIDE_START,
  
//       button_label: 'continue',
//       min: SLIDE_MIN,
//       max: SLIDE_MAX,
//       on_load: function(){
//         const last_trial =  jsPsych.data.getLastTrialData().values()[0];
//         function resize() {
//           const data = {
//             response: 'resized_window',
//             rt: null,
//             slider_start: SLIDE_START,
//             stimulus: 'resized_window',
//             subject: last_trial['subject'],
//             time_elapsed: jsPsych.totalTime(),
//             expStartTime: jsPsych.startTime(),
//             trial_index: last_trial['trial_index'] + 1,
//             version: VERSION,
//             condition: last_trial['condition'],
//             trial_type: 'resized_window',
//         }
//           onFinish(data);
//            // don't want to end the exp when they go fullscreen
//            // jsPsych.endExperiment('The experiment was ended by exiting fullscreen mode.');
//          };
//         window.onresize = resize;
//          $("#jspsych-html-slider-response-response").hide();
//       },
//       step:1,
//       labels: ['',],
//       is_html: true
//     }
//     return trial;
// }

// // May not need this - disregarding for now 
// function getProlificId(conditon){
//     var trial = {
//       type: 'survey-text',
//       on_finish: function(data) {
//         const subjectId = data['response']['prolific_id'];
//         const session = data['response']['session_number'];
  
//         jsPsych.data.addProperties({
//           // record the condition assignment in the jsPsych data
//           condition: conditon,
//           // this adds a property called 'subject' to every trial
//           subject: subjectId,
//           session: session,
  
//           version: VERSION,
//           expStartTime: jsPsych.startTime(),
//         });
//       },
//       questions: [
//         {prompt: "<h2>What is the Participant ID?</h2><br><br>",
//          placeholder: "111111111111", required: true,
//          name: 'prolific_id',
//        },
//       //  {prompt: "<h2>What the session number (1 or 2)?</h2><br><br>",
//       //   placeholder: "1", required: true,
//       //   name: 'session_number',
//       // }
  
//       ],
//     };
//     return trial;
// }

// function checkUChicagoOrProlific(){
//     return  {
//       type: 'survey-multi-choice',
//       preamble: '',
//       questions: [ {prompt: 'Are you coming from Prolific or SONA?',
//                     name: 'uch',
//                     options:    ["Prolific", "SONA",],
//                     required: true} ],
//         on_finish: function(data) {
//           const resp = data.response['uch'];
//           jsPsych.data.addProperties({subType: resp,});
//         }
//       };
// }

// function instructionsSliderPractice(){
//     var trial = {
//       type: "html-slider-response",
//       stimulus: '<h3>Practice adjusting the scale bar.<br><br> Use <span class="blue"><i>left</i></span> and <span class="blue"><i>right</i></span> keyboard arrows to control the scale bar. <br><br><br><h3> <br><br><br><br>',
//       slider_start: SLIDE_START,
//       button_label: 'continue',
//       slider_width: SLIDE_WIDTH,
//       min: SLIDE_MIN,
//       max: SLIDE_MAX,
//       on_load: function(){
//         sliderOnLoad("#jspsych-html-slider-response-response");
//       },
//       on_start: function(){
//         sliderOnStart("#jspsych-html-slider-response-response", 'instructionsSlider1');
//       },
//       on_finish: function(){
//         sliderOnFinish("#jspsych-html-slider-response-response");
//       },
//       step:1,
//       labels: SLIDE_LABELS,
//       is_html: true
//     }
//     return trial;
// }

// // Not using - not needed/Not applicable
// function instructionsSliderJump(){
//     var trial = {
//       type: "html-slider-response",
//       stimulus: '<h3>You can press <i><span class="red">SHIFT + left</span></i> and  <i><span class="red">SHIFT + right</span></i> arrow keys to make a <i><span class="red">big jump</span></i> on the scale.<br><br> When you feel comfortable with adjusting the scale, click continue. </h3>  <br><br><br><br>',
//       slider_start: SLIDE_START,
//       button_label: 'continue',
//       slider_width: SLIDE_WIDTH,
//       min: SLIDE_MIN,
//       max: SLIDE_MAX,
//       on_finish: function(){
//         sliderOnFinish("#jspsych-html-slider-response-response");
//       },
//       on_load: function(){
//         sliderOnLoad("#jspsych-html-slider-response-response");
//       },
//       on_start: function(){
//         sliderOnStart('#jspsych-html-slider-response-response', 'instructionsSlider2');
//       },
//       step:1,
//       labels: SLIDE_LABELS,
//       is_html: true
//     }
//     return trial;
// }

// function instructionsSliderPracticeTask(){
//     var trial = {
//       type: 'html-button-response',
//       stimulus: '<h3>Now we\'ll do a practice with a 1 minute video clip <br><br><br></h3>',
//       choices: ['Continue']
//     };
//     return trial;
// }

// function playPracticeAudio(){
//     return {  type: 'audio-keyboard-response',
//          stimulus: 'static/audio/waterfall.mp3',
//          prompt: `<h2>Please turn your <span class='blue'><i>volume on</i></span> and adjust it to a <span class='blue'><i>comfortable level</i></span></h2><br><br><br>
//          <h2>Press any key to continue</h2>`,
//        }
// }

// function soundQuiz(){
//     var page_1_options = ["People laughing",
//                           "Waterfall flowing",
//                           "Birds chirping",
//                           "Telephone ringing"];
//     var multi_choice_block = {
//       type: 'survey-multi-choice',
//       questions: [
//         {prompt: "Which sound did you just hear?",
//         name: 'volume_adjust', options: page_1_options, required:true},
//       ],
//       on_finish: function(data) {
//         const resp = data.response['volume_adjust'];
//       if(resp == "Waterfall flowing"){
//         data.correct = true;
//       } else {
//         data.correct = false;
//       }
//      }
//     };
//     return multi_choice_block;
// }

// function getVolumeAdustTrials(){
//     return { type: 'survey-multi-choice', timeline: [playBirdsAudio(), soundQuiz()],};
// }
