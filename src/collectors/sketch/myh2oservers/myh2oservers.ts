
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Myh2oserversCollector extends SketchCollector {

    static CONFIG = {
        id: "myh2oservers",
        name: "MyH2Oservers",
        description: "i18n.collectors.myh2oservers.description",
        version: "0",
        website: "https://www.myh2oservers.com/inloggen-klantenpaneel",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33371.jpg",
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
        entryUrl: "https://www.myh2oservers.com/inloggen-klantenpaneel",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Myh2oserversCollector.CONFIG);
    }
}
