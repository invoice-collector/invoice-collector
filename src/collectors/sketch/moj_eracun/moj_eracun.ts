
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MojEracunCollector extends SketchCollector {

    static CONFIG = {
        id: "moj_eracun",
        name: "Moj-Eracun",
        description: "i18n.collectors.moj_eracun.description",
        version: "0",
        website: "https://www2.moj-eracun.hr/b2b/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4414779.jpg",
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
        entryUrl: "https://www2.moj-eracun.hr/b2b/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MojEracunCollector.CONFIG);
    }
}
