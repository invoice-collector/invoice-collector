
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KusmiTeaCollector extends SketchCollector {

    static CONFIG = {
        id: "kusmi_tea",
        name: "Kusmi Tea",
        description: "i18n.collectors.kusmi_tea.description",
        version: "0",
        website: "http://www.kusmitea.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120405.jpg",
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
        entryUrl: "http://www.kusmitea.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KusmiTeaCollector.CONFIG);
    }
}
