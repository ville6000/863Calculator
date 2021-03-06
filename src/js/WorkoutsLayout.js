var Marionette = require("backbone.marionette");
var WorkoutTable = require("./WorkoutTable.js");

var WorkoutsLayout = Marionette.LayoutView.extend({
    template: require("../templates/workouts-layout-tpl.ejs"),
    className: "row",
    regions: {
        squat: ".squat-container",
        bench: ".bench-container",
        ohp: ".ohp-container",
        deadlift: ".deadlift-container"
    },

    initialize (options) {
        this.squatModel = options.squatModel;
        this.benchModel = options.benchModel;
        this.ohpModel = options.ohpModel;
        this.deadliftModel = options.deadliftModel;
    },

    onRender () {
        this.squat.show(
            new WorkoutTable({
                model: this.squatModel
            })
        );
        this.bench.show(
            new WorkoutTable({
                model: this.benchModel
            })
        );
        this.ohp.show(
            new WorkoutTable({
                model: this.ohpModel
            })
        );
        this.deadlift.show(
            new WorkoutTable({
                model: this.deadliftModel
            })
        );
    }
});

module.exports = WorkoutsLayout;