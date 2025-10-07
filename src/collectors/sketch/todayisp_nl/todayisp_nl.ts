
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TodayispNlCollector extends SketchCollector {

    static CONFIG = {
        id: "todayisp_nl",
        name: "Todayisp.nl",
        description: "i18n.collectors.todayisp_nl.description",
        version: "0",
        website: "http://mijn.todayisp.nl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39809.jpg",
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
        entryUrl: "http://mijn.todayisp.nl/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TodayispNlCollector.CONFIG);
    }
}
