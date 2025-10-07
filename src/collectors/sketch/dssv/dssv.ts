
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DssvCollector extends SketchCollector {

    static CONFIG = {
        id: "dssv",
        name: "DSSV",
        description: "i18n.collectors.dssv.description",
        version: "0",
        website: "https://www.dssv.de/mitglieder-login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4507090.jpg",
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
        entryUrl: "https://www.dssv.de/mitglieder-login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DssvCollector.CONFIG);
    }
}
