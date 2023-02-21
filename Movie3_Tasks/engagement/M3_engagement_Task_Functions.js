
  // NOTE: M3_Clips: '../movies/Movie_3/M3Clip1.mp4', '../movies/Movie_3/M3Clip2.mp4', '../movies/Movie_3/M3Clip3.mp4', '../movies/Movie_3/M3Clip4.mp4', '../movies/Movie_3/M3Clip5.mp4'
  function Experiment_Start_M3Clip1_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_3/M3Clip1.mp4'], 
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the videos.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M3Clip1_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
  function Experiment_Start_M3Clip2_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_3/M3Clip2.mp4'],
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the clip.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M3Clip2_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
  function Experiment_Start_M3Clip3_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_3/M3Clip3.mp4'],
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the videos.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M3Clip3_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
  function Experiment_Start_M3Clip4_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_3/M3Clip4.mp4'],
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the videos.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M3Clip4_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
  function Experiment_Start_M3Clip5_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_3/M3Clip5.mp4'],
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the videos.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M3Clip5_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }