module.exports = async function (context, req) {
    context.log('Function triggered.');
   
    // Configure DB entry
    context.bindings.surveyData = JSON.stringify({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });

    // Configure response
    context.res = {
        status: 200
    };
}