
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CsiiCollector extends SketchCollector {

    static CONFIG = {
        id: "csii",
        name: "CSII",
        description: "i18n.collectors.csii.description",
        version: "0",
        website: "https://secure.eplustechnologies.com/esalesplus/home_CSI.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88377.jpg",
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
        entryUrl: "https://secure.eplustechnologies.com/esalesplus/home_CSI.htm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CsiiCollector.CONFIG);
    }
}
