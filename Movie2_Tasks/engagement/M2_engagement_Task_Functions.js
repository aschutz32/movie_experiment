
  // NOTE: M2_Clips: '../movies/Movie_2/M2Clip1.mp4', '../movies/Movie_2/M2Clip2.mp4', '../movies/Movie_2/M2Clip3.mp4', '../movies/Movie_2/M2Clip4.mp4'
  function Experiment_Start_M2Clip1_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_2/M2Clip1.mp4'], 
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the videos.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M2Clip1_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
  function Experiment_Start_M2Clip2_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_2/M2Clip2.mp4'],
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the clip.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M2Clip2_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
  function Experiment_Start_M2Clip3_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_2/M2Clip3.mp4'],
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the videos.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M2Clip3_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
  function Experiment_Start_M2Clip4_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_2/M2Clip4.mp4'],
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the videos.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M2Clip4_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
