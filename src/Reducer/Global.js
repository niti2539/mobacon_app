const init = {
    carrier: '',
    AnalyzeReview:{
      like: true,
      review: '',
      suggestion: '',
    }
  }
  
  export default function Global(state = init, action) {
      switch (action.type) {
        case 'CARRIER': 
          state.carrier = action.payload
          return state;
        case 'AnalyzeReview_Like': 
          state.AnalyzeReview.like = action.payload
          return state;
        case 'AnalyzeReview_Review': 
          state.AnalyzeReview.review = action.payload
          return state;
        case 'AnalyzeReview_Suggestion': 
          state.AnalyzeReview.suggestion = action.payload
          return state;
        case 'AnalyzeReview_Clear': 
          state.AnalyzeReview = {
            like: true,
            review: '',
            suggestion: '',
          }
          return state;
        default:
          return state
      }
    }