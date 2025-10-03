
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SteuertippsVonWoltersKluwerCollector extends SketchCollector {

    static CONFIG = {
        id: "steuertipps_von_wolters_kluwer",
        name: "steuertipps von Wolters Kluwer",
        description: "i18n.collectors.steuertipps_von_wolters_kluwer.description",
        version: "0",
        website: "https://www.steuertipps.de/profil",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1538411.jpg",
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
        entryUrl: "https://www.steuertipps.de/profil",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SteuertippsVonWoltersKluwerCollector.CONFIG);
    }
}
