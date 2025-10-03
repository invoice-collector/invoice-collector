
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SurveymonkeyCollector extends SketchCollector {

    static CONFIG = {
        id: "surveymonkey",
        name: "SurveyMonkey",
        description: "i18n.collectors.surveymonkey.description",
        version: "0",
        website: "https://de.surveymonkey.com/home/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6457.jpg",
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
        entryUrl: "https://de.surveymonkey.com/home/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SurveymonkeyCollector.CONFIG);
    }
}
