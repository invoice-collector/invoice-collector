
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HumanKineticsCollector extends SketchCollector {

    static CONFIG = {
        id: "human_kinetics",
        name: "Human Kinetics",
        description: "i18n.collectors.human_kinetics.description",
        version: "0",
        website: "http://www.humankinetics.com/?&LoginOverlay=true&Returndoc=%252F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45061.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "http://www.humankinetics.com/?&LoginOverlay=true&Returndoc=%252F",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HumanKineticsCollector.CONFIG);
    }
}
