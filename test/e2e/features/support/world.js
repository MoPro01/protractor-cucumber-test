/**
 * Common place for test data and configuration.
 */

function World() {

    /**
     * Many times, we need unique identifier that does not change in the scope of the automation run.
     * @type {number}
     */
    this.testTimeStamp = new Date().getTime();

    /*
     Object to hold the jumpshot user personas.
     */
    this.PERSONA = {

        Monika: {
            firstName: "Monika",
            lastName: "Protivova",
            username: "monika.protivova@gmail.com",
            password: "acnt4test"
        },

        getByName: function (name) {
            return this[name];
        }

    };


    /*
     Sets user name, but keeps it to the same value if it is just user reference.
     */
    this.getUser = function(userData, user) {

        if (user != 'he' &&
            user != 'she' &&
            user != 'user' &&
            user != 'her' &&
            user != 'his') {
            return this.PERSONA.getByName(user);
        }

        return userData;
    };

}

module.exports = function() {
    this.World = World;
};
