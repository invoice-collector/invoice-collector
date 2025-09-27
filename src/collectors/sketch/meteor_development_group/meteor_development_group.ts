
import { SketchCollector } from '../../sketchCollector';

export class MeteorDevelopmentGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "meteor_development_group",
        name: "Meteor Development Group",
        description: "i18n.collectors.meteor_development_group.description",
        version: "0",
        website: "https://eu-west-1.galaxy.meteor.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132501.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://eu-west-1.galaxy.meteor.com/",
    }

    constructor() {
        super(MeteorDevelopmentGroupCollector.CONFIG);
    }
}
