
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SurveylegendCollector extends SketchCollector {

    static CONFIG = {
        id: "surveylegend",
        name: "SurveyLegend",
        description: "i18n.collectors.surveylegend.description",
        version: "0",
        website: "https://www.surveylegend.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037330.jpg",
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
        entryUrl: "https://www.surveylegend.com/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SurveylegendCollector.CONFIG);
    }
}
