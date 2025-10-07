
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FiliagoCollector extends SketchCollector {

    static CONFIG = {
        id: "filiago",
        name: "Filiago",
        description: "i18n.collectors.filiago.description",
        version: "0",
        website: "https://www.filiago.de/Account/Login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9228.jpg",
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
        entryUrl: "https://www.filiago.de/Account/Login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FiliagoCollector.CONFIG);
    }
}
