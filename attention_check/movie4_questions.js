
function movie4AttentionCheck(){
    var trial = {
        type: jsPsychSurveyMultiChoice,
        questions: [
            {
                prompt: "<b>Which clip appeared in the videos you watched? </b>",
                name: 'ScenesNotM1',
                options: ['clip about planning a money heist', 'clip about items in pockets', 'clip about a hotel stay', 'clip about being left at home alone', 'clip about a community garden', 'clip about a court hearing'],
                required: true
            },
        ],
        on_finish: function(data){
            const resp = data.response['volume_adjust'];
          if(resp == "clip about items in pockets"){
            data.correct = true;
          } else {
            data.correct = false;
          };
        },
        data: {TASK: 'AttentionCheck'},

    };
    return trial;
}
