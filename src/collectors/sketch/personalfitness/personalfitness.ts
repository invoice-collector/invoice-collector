
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PersonalfitnessCollector extends SketchCollector {

    static CONFIG = {
        id: "personalfitness",
        name: "personalfitness",
        description: "i18n.collectors.personalfitness.description",
        version: "0",
        website: "http://www.personalfitness.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16486.jpg",
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
        entryUrl: "http://www.personalfitness.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PersonalfitnessCollector.CONFIG);
    }
}
