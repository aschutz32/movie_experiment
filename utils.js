
// Record data on finish
function onFinish(data){
    dm.recordData(data);
  }
  
//   var preload = {
//     type: jsPsychPreload,
//     auto_preload: true,
//     // video: ,
//     message: 'Please wait while the experiment loads. This may take a minute.',
//     show_progress_bar: true,
//     max_load_time: 300000, // 2 minutes
//     error_message: 'The experiment failed to load - sorry about this! Please try moving to a location with a better WiFi connection.',
//     continue_after_error: false,
//     show_detailed_errors: true,
//     // on_error: function(file) {
//     //   file_error_count++;
//     //   console.log('Error: ',file);
//     // },
//     // on_success: function(file) {
//     //   file_load_count++;
//     //   console.log('Loaded: ',file)
//     // }
//   }
  
  
//   // Preloading Practice Clip & Practice Audio. Will need to manually load task videos.
//   // For more information: https://www.jspsych.org/7.3/overview/media-preloading/
  
//   var audiotest_trial = {
//     type: jsPsychAudioKeyboardResponse,
//     stimulus: '../audio/waterfall.mp3'
//   }
  
//   // Preloading Full Movies
//   var M1movie_trials = {
//     type: jsPsychVideoKeyboardResponse,
//     stimulus: ['../movies/Practice_Video.mp4','../movies/7T_MOVIE1_CC1.mp4']
//   }
//   var M2movie_trials = {
//     type: jsPsychVideoKeyboardResponse,
//     stimulus: ['../movies/Practice_Video.mp4', '../movies/7T_MOVIE3_CC2.mp4']
//   }
//   var M3movie_trials = {
//     type: jsPsychVideoKeyboardResponse,
//     stimulus: ['../movies/Practice_Video.mp4', '../movies/7T_MOVIE3_CC2.mp4']
//   }
//   var M4movie_trials = {
//     type: jsPsychVideoKeyboardResponse,
//     stimulus: ['../movies/Practice_Video.mp4', '../movies/7T_MOVIE4_HO2.mp4']
//   }
  
//   // Preloading CLips from Movies
//   var M1_Clips = {
//       type: jsPsychVideoKeyboardResponse,
//       stimulus: ['../movies/Movie_1/M1Clip1.mp4', '../movies/Movie_1/M1Clip2.mp4', '../movies/Movie_1/M1Clip3.mp4', '../movies/Movie_1/M1Clip4.mp4', '../movies/Movie_1/M1Clip5.mp4']
//   }
//   var M2_Clips = {
//       type: jsPsychVideoKeyboardResponse,
//       stimulus: ['../movies/Movie_2/M2Clip1.mp4', '../movies/Movie_2/M2Clip2.mp4', '../movies/Movie_2/M2Clip3.mp4', '../movies/Movie_2/M2Clip4.mp4']
//   }
//   var M3_Clips = {
//       type: jsPsychVideoKeyboardResponse,
//       stimulus: ['../movies/Movie_3/M3Clip1.mp4', '../movies/Movie_3/M3Clip2.mp4', '../movies/Movie_3/M3Clip3.mp4', '../movies/Movie_3/M3Clip4.mp4', '../movies/Movie_3/M3Clip5.mp4']
//   }
//   var M4_Clips = {
//       type: jsPsychVideoKeyboardResponse,
//       stimulus: ['../movies/Movie_4/M4Clip1.mp4', '../movies/Movie_4/M4Clip2.mp4', '../movies/Movie_4/M4Clip3.mp4', '../movies/Movie_4/M4Clip4.mp4']
//   }
  
  
//   var block_images = {
//     timeline: [
//       {
//         type: jsPsychImageKeyboardResponse,
//         stimulus: '../images/CABLab_behavior_online_consent.png'
//       },
//       {
//         type: jsPsychImageKeyboardResponse,
//         stimulus: '../images/crossDiagram.png'
//       },
//       {
//         type: jsPsychImageKeyboardResponse,
//         stimulus: '../images/left_right_arrow.png'
//       },
//       {
//         type: jsPsychImageKeyboardResponse,
//         stimulus: '../images/movie.png'
//       },
//       {
//         type: jsPsychImageKeyboardResponse,
//         stimulus: '../images/university.png'
//       },
//       {
//         type: jsPsychImageKeyboardResponse,
//         stimulus: '../images/REST.png'
//       },
//       {
//         type: jsPsychImageKeyboardResponse,
//         stimulus: '../images/keyboard_image.png'
//       },
//       {
//         type: jsPsychImageKeyboardResponse,
//         stimulus: '../images/Slider_Video_Example.png'
//       }
//     ]
//   }
  
//   var preload_images = {
//     type: jsPsychPreload,
//     trials: block_images
//   }
  
//   var browsercheck = {
//       type: jsPsychBrowserCheck,
//       inclusion_function: (data) => {
//         return data.mobile === false
//       },
//       exclusion_message: (data) => {
//         if(data.mobile){
//           return '<p>You must use a desktop/laptop computer to participate in this experiment.</p>'
//         } 
//       }
//     }
  
//   jsPsych.run([preload, preload_images, audiotest_trial, M2_Clips, browsercheck]);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //  // create the rest of the experiment
   
  //  const VERSION = 1.0;
  
  // //  const SLIDE_MIN = 1;
  // //  const SLIDE_MAX = 100;
  // //  // const SLIDE_BIG_STEP = 5;
  // //  const SLIDE_START = 50;
  // //  const SLIDE_WIDTH = 650;
  //  const SLIDE_LABELS = ['Not at all', 'Completely']
  //  const SLIDE_LABELS_ENGAGEMENT  = ['Not engaging at all','Completely engaging']
  //  const SLIDE_LABELS_RELATABILITY = ['Not relatable at all', 'Completely relatable']
  //  const SLIDE_LABELS_SURPRISE = ['Not surprising at all', 'Completely surprising']
  //  const SLIDE_LABELS_IMPORTANCE = ['Not important at all', 'Completely important']
  //  const SLIDE_LABELS_VALENCE = ['Negative', 'Positive']
  //  const SLIDE_LABELS_AROUSAL = ['Low / No strong feelings','High / Very strong feelings']
  //  const SLIDE_LABELS_FOCUS = ['Not focusing at all', 'Completely focusing']
  //  const SLIDE_LABELS_COMPREHENSION = ['Not understanding at all', 'Completely understanding']
  //  const SLIDE_LABELS_BOREDOM = ['Not boring at all','Completely boring']
  
  
  
  
  // var preload = {
  //   type: jsPsychPreload,
  //   auto_preload: true,
  //   // video: ,
  //   message: 'Please wait while the experiment loads. This may take a minute.',
  //   show_progress_bar: true,
  //   max_load_time: 300000, // 2 minutes
  //   error_message: 'The experiment failed to load - sorry about this! Please try moving to a location with a better WiFi connection.',
  //   continue_after_error: false,
  //   show_detailed_errors: true,
  //   // on_error: function(file) {
  //   //   file_error_count++;
  //   //   console.log('Error: ',file);
  //   // },
  //   // on_success: function(file) {
  //   //   file_load_count++;
  //   //   console.log('Loaded: ',file)
  //   // }
  // }
  
  
  // // Preloading Practice Clip & Practice Audio. Will need to manually load task videos.
  // // For more information: https://www.jspsych.org/7.3/overview/media-preloading/
  
  // var audiotest_trial = {
  //   type: jsPsychAudioKeyboardResponse,
  //   stimulus: 'audio/waterfall.mp3'
  // }
  
  // var M1movie_trials = {
  //   type: jsPsychVideoKeyboardResponse,
  //   stimulus: ['movies/Practice_Video.mp4','movies/7T_MOVIE1_CC1.mp4']
  // }
  
  // var M2movie_trials = {
  //   type: jsPsychVideoKeyboardResponse,
  //   stimulus: ['movies/Practice_Video.mp4', 'movies/7T_MOVIE3_CC2.mp4']
  // }
  
  // var M3movie_trials = {
  //   type: jsPsychVideoKeyboardResponse,
  //   stimulus: ['movies/Practice_Video.mp4', 'movies/7T_MOVIE3_CC2.mp4']
  // }
  
  // var M4movie_trials = {
  //   type: jsPsychVideoKeyboardResponse,
  //   stimulus: ['movies/Practice_Video.mp4', 'movies/7T_MOVIE4_HO2.mp4']
  // }
  
  // var block_images = {
  //   timeline: [
  //     {
  //       type: jsPsychImageKeyboardResponse,
  //       stimulus: 'images/CABLab_behavior_online_consent.png'
  //     },
  //     {
  //       type: jsPsychImageKeyboardResponse,
  //       stimulus: 'images/crossDiagram.png'
  //     },
  //     {
  //       type: jsPsychImageKeyboardResponse,
  //       stimulus: 'images/left_right_arrow.png'
  //     },
  //     {
  //       type: jsPsychImageKeyboardResponse,
  //       stimulus: 'images/movie.png'
  //     },
  //     {
  //       type: jsPsychImageKeyboardResponse,
  //       stimulus: 'images/university.png'
  //     }
  //   ]
  // }
  
  // var preload_images = {
  //   type: jsPsychPreload,
  //   trials: block_images
  // }
  
  // jsPsych.run([preload, preload_images, audiotest_trial, M1movie_trials]);
  
  
  // function unbindSliderEvents(sliderId){
  //   // need to remove the event handler
  //   // or it lasts into the next trial
  //   $(document).off('change', sliderId);
  //   $(document).unbind('keydown');
  // }
  
  // function sliderOnFinish(sliderId){
  //   unbindSliderEvents(sliderId);
  // };
  
  // function sliderOnLoad(sliderId){
  //   // unbindSliderEvents(sliderId);
  
  //   //  want the slider to be selected when the page loads
  //   $(sliderId).focus();
  
  //   // don't want users to be able to click or drag slider
  //   $(document).on('click', sliderId, function() {
  //     event.preventDefault();
  //   });
  
  //   $(document).on('mousedown', sliderId, function(event) {
  //    event.preventDefault();
  //  });
  
  //  $(document).on('mousedown', function(event) {
  //   event.preventDefault();
  // });
  // };
  
  // function recordSliderStartingPoint(last_trial, stimulus){
  //   const data = {
  //     response: SLIDE_START,
  //     rt: 0,
  //     slider_start: SLIDE_START,
  //     stimulus: stimulus,
  //     subject: last_trial['subject'],
  //     time_elapsed: jsPsych.totalTime(),
  //     expStartTime: jsPsych.startTime(),
  //     trial_index: last_trial['trial_index'] + 1,
  //     version: VERSION,
  //     condition: last_trial['condition'],
  //     trial_type: 'video-slider-response-response',
  // }
  //   onFinish(data);
  // }
  
  // function sliderOnStart(sliderId, stimulus){
  
  //   const last_trial =  jsPsych.data.getLastTrialData().values()[0];
  //   var start_time = new Date().getTime();
  
  
  //   // record the starting point of the slider before the trial begins!
  //   recordSliderStartingPoint(last_trial, stimulus);
  
  //   $(document).keydown(function(e) {
  //         var y = document.getElementById(sliderId.replace('#', ''));
  
  //         if ((e.which == 39) && (e.shiftKey)) {
  //           const oldVal = parseInt(y.value)
  //           var newVal = parseInt(y.value) + (SLIDE_BIG_STEP-1);
  //           if ((newVal + 1) >= SLIDE_MAX){
  //             newVal = SLIDE_MAX - 1;
  //           }
  //           y.value = newVal;
  //         }
  //         if ((e.which == 37) && (e.shiftKey)) {
  //           const oldVal = parseInt(y.value)
  //           var newVal = parseInt(y.value) - (SLIDE_BIG_STEP-1);
  //           if ((newVal - 1) <= SLIDE_MIN){
  //             newVal = SLIDE_MIN + 1;
  //           }
  //           y.value = newVal;
  //         }
  //   });
  
  //   $(document).on('change', sliderId, function() {
  //     var d = new Date();
  //     const diff =  d.getTime() - start_time;
  //     const data = {
  //       response: $(this).val(),
  //       rt: diff,
  //       slider_start: SLIDE_START,
  //       stimulus: stimulus,
  //       subject: last_trial['subject'],
  //       time_elapsed: jsPsych.totalTime(),
  //       expStartTime: jsPsych.startTime(),
  //       trial_index: last_trial['trial_index'] + 1,
  //       version: VERSION,
  //       condition: last_trial['condition'],
  //       trial_type: 'video-slider-response-response',
  //       trial_subtype: 'sliderRating_'+stimulus,
  
  //   }
  //     onFinish(data);
  // });
  // };
  
  
  // var preload = {
  //   type: jsPsychPreload,
  //   auto_preload: true,
  //   // video: ,
  //   message: 'Please wait while the experiment loads. This may take a minute.',
  //   show_progress_bar: true,
  //   max_load_time: 300000, // 2 minutes
  //   error_message: 'The experiment failed to load - sorry about this! Please try moving to a location with a better WiFi connection.',
  //   continue_after_error: false,
  //   show_detailed_errors: true,
  //   // on_error: function(file) {
  //   //   file_error_count++;
  //   //   console.log('Error: ',file);
  //   // },
  //   // on_success: function(file) {
  //   //   file_load_count++;
  //   //   console.log('Loaded: ',file)
  //   // }
  // };
  
  
  // // Preloading Practice Clip & Practice Audio. Will need to manually load task videos.
  // // For more information: https://www.jspsych.org/7.3/overview/media-preloading/
  
  // var audiotest_trial = {
  //   type: jsPsychAudioKeyboardResponse,
  //   stimulus: 'audio/waterfall.mp3'
  // };
  
  // var movie_trials = {
  //   type: jsPsychVideoKeyboardResponse,
  //   stimulus: ['movies/Practice_Video.mp4','movies/7T_MOVIE1_CC1.mp4']
  // };
  
  // var block_images = {
  //   timeline: [
  //     {
  //       type: jsPsychImageKeyboardResponse,
  //       stimulus: 'CABLab_behavior_online_consent.png'
  //     },
  //     {
  //       type: jsPsychImageKeyboardResponse,
  //       stimulus: 'crossDiagram.png'
  //     },
  //     {
  //       type: jsPsychImageKeyboardResponse,
  //       stimulus: 'left_right_arrow.png'
  //     },
  //     {
  //       type: jsPsychImageKeyboardResponse,
  //       stimulus: 'movie.png'
  //     },
  //     {
  //       type: jsPsychImageKeyboardResponse,
  //       stimulus: 'university.png'
  //     }
  //   ]
  // };
  
  
  // var movie_trials = {
  //   timeline: [
  //     {
  //       type: jsPsychVideoKeyboardResponse,
  //       stimulus: jsPsych.timelineVariable('movies')
  //     }
  //   ],
  //   timeline_variables: [
  //     {video: ['movies/Practice_Video.mp4']},
  //     {video: ['movies/7T_MOVIE1_CC1.mp4']},
  //     {video: ['movies/7T_MOVIE2_HO1.mp4']},
  //     {video: ['movies/7T_MOVIE3_CC2.mp4']},
  //     {video: ['movies/7T_MOVIE4_HO2.mp4']}
  //   ]
  // };
  
  // var movies = ['movies/Practice_Video.mp4','movies/7T_MOVIE1_CC1.mp4', 'movies/7T_MOVIE2_HO1.mp4', 'movies/7T_MOVIE3_CC2.mp4', 'movies/7T_MOVIE4_HO2.mp4']
  
  
  
  // var save_data = {
  //   type: jsPsychCallFunction,
  //   async: true,
  //   func: function(done){
  //     var data = jsPsych.data.get().json();
  //     save_data(data, function() {document()})
  //   }
  // }
  
  // var fail_message = {
  //   type: jsPsychHtmlKeyboardResponse,
  //   stimulus: 'The experiment failed to load.',
  //   choices: "NO_KEYS",
  //   trial_duration: null
  // }
  
  // var if_loading_fails = {
  //   timeline: [save_data, fail_message],
  //   conditional_function: function() {
  //     if (jsPsych.data.getLastTrialData()[0].values().success) {
  //         // preloading was successful, so skip this conditional timeline
  //         // and move on with the experimeent
  //         return false;
  //     } else {
  //         // preloading failed, so run this conditional timeline:
  //         // save teh data to the server and show the fail message
  //         return true;
  //     }
  //   }
  // }
  
  
  // jsPsych.run([save_data, fail_message, if_loading_fails]);
  
  
  
  // // option for demographics questions
  // function demographicsQuestions(){
  //   var DemoQ1_options = ["Male", "Female", "Gender Non-conforming", "Other", "Choose not to respond"];
  //   var DemoQ2_options = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75-84", "85 or older"];
  //   var DemoQ3_options = ["Hispanic/Latino", "Not Hispanic/Latino", "Choose not to respond"];
  //   var DemoQ4_options = ["American Indian/Native American","White", "Black/African American", "Asian", "Native Hawaiian or Pacific Islander", "More than one race", "Other","Choose not to respond"];
  //   var DemoQ5_options = ["Less than a high school diploma", "High school degree or equivalent (e.g. GED)", "Some college, no degree", "Associate degree (e.g. AA, AS)", "College degree", "Master's degree (e.g. MA, MS, MEd)", "Doctorate or professional degree (e.g. MD, DDS, PhD)"];
  
  //   var all_that_apply = {type: 'survey-multi-select',
  //       questions: [
  //         {
  //           prompt: "How would you describe yourself? Please select all that apply.",
  //           options: DemoQ4_options,
  //           horizontal: false,
  //           required: true,
  //           name: 'DemoQ4'
  //         },]
  //       };
  //   var multi_choice_Demo = {
  //       type: 'survey-multi-choice',
  //       button_label: 'Next',
  //       preamble: 'Please answer some further questions on demographics.',
  //       questions: [
  //           { prompt: "What is your gender?", name: 'DemoQ1', options: DemoQ1_options, required: true },
  //           { prompt: "What is your age?", name: 'DemoQ2', options: DemoQ2_options, required: true },
  //           { prompt: "What is your Ethnicity?", name: 'DemoQ3', options: DemoQ3_options, required: true },
  //           { prompt: "What is the highest degree or level of school you have completed?", name: 'DemoQ5', options: DemoQ5_options, required: true },
  //       ],
  //   };
  //   return  {timeline:  [multi_choice_Demo, all_that_apply]};
  // }
  