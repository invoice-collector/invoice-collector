
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GantterCollector extends SketchCollector {

    static CONFIG = {
        id: "gantter",
        name: "Gantter",
        description: "i18n.collectors.gantter.description",
        version: "0",
        website: "https://google.gantter.com/gad/manage/drive",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513761.jpg",
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
        entryUrl: "https://google.gantter.com/gad/manage/drive",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GantterCollector.CONFIG);
    }
}
