
function getInstructionsGeneralProcedureEngagement(){
  var trial = {
    type: jsPsychInstructions,
    pages: [
      'We are interested in how <b>engaging</b> you find the videos changes over time. <br><br><i><b>Every time</b></i> how <b>engaging</b> you find the video changes - <i>even just a little bit</i> - please change the scale bar to match.<br><br>',
      'Your compensation will in part depend on <b>continuously</b> indicating how <b>engaging</b> you find the videos.<br><br>',
      'As you rate the following videos, make sure you record whenever there is a <i>noticeable <b>increase</b> or <b>decrease</b> in how <b>engaging</b> you find the video</i>.<br><br>'
    ],
    show_clickable_nav: true,
    data: {function: 'getInstructionsGeneralProcedure' }
  }
  return trial;
}

function getInstructionsProcedureDefinitionEngagement(){
  var trial = {
    type: jsPsychInstructions,
    pages: [
      '<h3>Please ensure that you are in a quiet room with no distractions.</h3><br><br>',
      '<h3>I find the story <i>engaging</i> when...</h3>' +
      '- I am curious and excited to know what is coming up next' + '<br>' +
      '- I am immersed in the story' + '<br>' +
      '- My attention is focused on the story' + '<br>' + 
      '- The events are interesting' + '<br>' + '<br>' +
      '<h3>I find the story <i>not engaging</i> when...</h3>' +
      '- I am bored' + '<br>' +
      '- Other things pop into my mind, like my daily concerns or personal events' + '<br>' +
      '- My attention is wandering away from the story' + '<br>' +
      '- I can feel myself dozing off' + '<br>' +
      '- The events are not interesting' + '<br>' + '<br><br>' +
      '<i>When you have read the text above and understand what you will be rating, please continue.</i><br><br>',
      '<h3>Reminders:</h3>' + 
      '- We are interested in how <span class="blue">engaging</span> you find the videos changes over time.' + '<br>' + 
      '<span class="blue">- <b>Every time</b> how engaging you find it changes—</span><span class="blue"><b>even just a little bit</b></span>—please change the scale bar to match.' + '<br>' + 
      '- As you rate the following videos, make sure you record whenever there is an <b>increase</b> or a <b>decrease</b> in how <b>engaging</b> the video is.' + '<br><br><br>' + 
      '<i><b>Now, we will practice adjusting the slider with a short clip.</b></i><br><br>',
    ],
    show_clickable_nav: true,
    data: {function: 'getInstructionsProcedureDefinitionEngagement' }
  }
  return trial;
}
  
  // auto_preload: true setting tells the plugin to automatically find the stimuli and preload based on main experiment timeline
  // only used for practice video and sound due to smaller size
  
  // Practice Video found under Creative Commons Public Domain Dedication: https://vimeo.com/707465273
  function practiceClipTaskEngagement(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['movies/Practice_Video.mp4'],
      labels: SLIDE_LABELS,
      // width: 1280,
      // height: 720,
      button_label: '',
      track_slider_history: true,
      trial_ends_after_video: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      // trial_duration: 
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the videos.',
      data: {Practice: 'practiceClipTaskEngagement' },
    }
    return trial;
  };

  function askAboutInstructionRepeatEngagement(){
    var trial = {
      type: jsPsychHtmlButtonResponse,
      choices: ['Repeat Instructions', 'Continue'],
      stimulus: "<h3>Before you start the experiment, would you like to see the instructions again?</h3><br><br><br>",
      data: {function: 'askAboutInstructionRepeat' }
    };
    return trial;
  };
  
  function getRepeatedInstructionsProcedureEngagement(){
    var repeated_instructions = {
      timeline: [
        getInstructionsGeneralProcedureEngagement(),
        getInstructionsProcedureDefinitionEngagement(),
        practiceClipTaskEngagement()],
      data: {function: 'getRepeatedInstructionsProcedureEngagement' },
      conditional_function: function(){
        // check which button was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if (data['response'] ==0){
          return true;
        } else {
          return false;
        }
      }
    };
    return repeated_instructions;
  };

function OverallClipEngagement(){
  var trial = {
    type: jsPsychHtmlSliderResponse,
    stimulus: `<div style="width:500px;">
    <b>Overall, how engaging did you find the video?</b>`,
    require_movement: true,
    labels: SLIDE_LABELS_ENGAGEMENT,  
    data: {TASK: 'OverallClipEngagement'},
    on_load: function() {
      document.getElementById("jspsych-html-slider-response-response").focus()
    },
  }
  return trial;
}

  // USE AT THE END OF EXPERIMENT
  // function End_of_Task_Procedure_OverallEngagement(){
  //   var trial = {
  //     type: jsPsychHtmlSliderResponse,
  //     stimulus: `<div style="width:500px;">
  //     <b>Overall, how engaging did you find <i>all</i> of the videos?</b>`,
  //     require_movement: true,
  //     labels: SLIDE_LABELS_ENGAGEMENT,
  //     data: {TASK: 'End_of_Task_Procedure_OverallEngagement'},
  //   }
  //   return trial;
  // }

  // function End_of_Task_Procedures_FR_Engagement(){
  //   var trial = {
  //     type: jsPsychSurveyText,
  //     questions: [
  //       {prompt: '<b>What made each part of the film differ in engagement? Please let us know your decision process.</b>'}
  //     ],
  //     data: {TASK: 'End_of_Task_Procedures_FR_Engagement'},
  //   }
  //   return trial;
  // }
























































// function getInstructionsGeneralProcedureEngagement(){
//   var trial = {
//     type: jsPsychHtmlKeyboardResponse,
//     stimulus: `<div id='container-exp'>
//     <h1>Movie Watching Task <h1/><br><br>
//     <h3>While each movie clip is playing, you will <i><span class="red">continuously</span></i> rate how <i><span class="red">MEASURE</span></i> you find it.</h3><br><br>
//     <h3>You can press <i><span class="blue">left</span></i> and <i><span class="blue">right</span></i> arrow keys to adjust the scale.</h3><br>
//     <p>Press any key to continue.</p>
//     </div>`,
//     choices: "ALL_KEYS",
//     prompt: `<div><img  style= height=300" width="200" vertical-align=bottom src=left_right_arrow.png/></div>`,
//   }
//   return trial;
// };

// function getInstructionsProcedureDefinitionEngagement(){
//   var trial = {
//     type: jsPsychHtmlButtonResponse,
//     stimulus: `<div id='container-exp' style='float: left;'>
//     <h1>Movie Watching Task <h1/><br><br><br>
//     <h3>I find the content <i><b><span class='red'>MEASURE</span></b></i>when...</h3><br>
//     <ul>
//       <li><h4>"I am curious and excited to know what's coming up next."</h4></li>
//       <li><h4>"I am immersed in the story."</h4></li>
//       <li><h4>"My attention is focused on the story."</h4></li>
//       <li><h4>"The events are interesting."</h4></li>
//     </ul><br><br><br>
//     <h3>I find the content <i><b><span class='red'>not engaging</span></b></i> when...</h3><br>
//     <ul>
//       <li><h4>"I am bored."</h4></li>
//       <li><h4>"Other things pop into my mind, like my daily concerns or personal events."</h4></li>
//       <li><h4>"My attention is wandering away from the story."</h4></li>
//       <li><h4>"I can feel myself dozing off."</h4></li>
//       <li><h4>"The events are not interesting."</h4></li>
//     </ul><br><br>
//     </div>`,
//     prompt: "<p>When you have fully read and understand the definiton of MEASURE, please continue.</p>",
//     choices: ['Continue'],
//   }
//   return trial;
// };

// // USE AT THE END OF EXPERIMENT
// function overallSliderEngagement(){
//   var trial = {
//     type: jsPsychHtmlSliderResponse,
//     stimulus: `<h3>Overall, how MEASURE did you find the clip?<br><br>`,
//     require_movement: true,
//     labels: SLIDE_LABELS_ENGAGEMENT
//   }
//   return trial;
// };

// function getInstructionsSliderReminderEngagement(){
//   var trial = {
//     type: jsPsychHtmlKeyboardResponse,
//     stimulus: '<h3>We are interested in how <span class="blue">MEASURE</span> different parts of the clip are.<br><br><br> <span class="blue"><b>Every time</b> how MEASURE you find it changes—</span><span class="blue"><b>even just a little bit</b></span>—please change the scale bar to match. <br><br><br><br><br><br>Your compensation will in part depend on continuously indicating how engaging you find the clip.<br><br><br></h3><br><br><h3>As you rate the following clips, make sure you record<br><br>whenever there is an <b>increase</b> or a <b>decrease</b> in how MEASURE the video is.</h3><br><br><br>',
//     choices: "ALL_KEYS",
//     prompt: "<p>Press any key to continue.</p>"
//   }
//   return trial;
// };

// // auto_preload: true setting tells the plugin to automatically find the stimuli and preload based on main experiment timeline
// // only used for practice video and sound due to smaller size

// // Practice Video found under Creative Commons Public Domain Dedication: https://vimeo.com/707465273
// function practiceClipTaskEngagement(){
//   var trial = {
//     type: jsPsychVideoSliderResponse,
//     stimulus: ['movies/Practice_Video.mp4'],
//     labels: SLIDE_LABELS_ENGAGEMENT,
//     prompt: '<p>Please continuously move the slider to match how MEASURE you find each part of the clip.</p>'
//   }
//   return trial;
// };

// function askAboutInstructionRepeatEngagement(){
//   var trial = {
//     type: jsPsychHtmlButtonResponse,
//     choices: ['Repeat Instructions', 'Continue'],
//     stimulus: "<h3>Before you start the experiment, would you like to see the instructions again?</h3><br><br><br>",
//   };
//   return trial;
// };

// function getRepeatedInstructionsProcedureEngagement(){
//   var repeated_instructions = {
//     timeline: [
//       getInstructionsIntroProcedure(),
//       instructionsSliderPractice(),
//       getInstructionsGeneralProcedureEngagement(),
//       getInstructionsProcedureDefinitionEngagement(),
//       getInstructionsSliderReminderEngagement(),
//       instructionsSliderPracticeTask(),
//       practiceClipTaskEngagement()],
//     conditional_function: function(){
//       // get data from last trial: askAboutInstructionRepeatMEASURE() 
//       // check which button was pressed
//       var data = jsPsych.data.get().last(1).values()[0];
//       if (data['response'] ==0){
//         return true;
//       } else {
//         return false;
//       }
//     }
//   };
//   return repeated_instructions;
// };

// function Experiment_Start_Engagement(){
//   var trial = {
//     type: jsPsychVideoSliderResponse,
//     stimulus: ['movies/7T_MOVIE1_CC1.mp4'],
//     // MoviesList, // NEED TO CREATE THIS VAR TO RANDOMLY ASSIGN
//     labels: SLIDE_LABELS_ENGAGEMENT,
//     prompt: '<p>Please continuously move the slider to match how MEASURE you find each part of the clip.</p>',
//     track_slider_history: true,
//     on_finish: function(data){
//       console.log(data);
//     }
//   }
//   return trial;
// }
