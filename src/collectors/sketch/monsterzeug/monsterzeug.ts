
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MonsterzeugCollector extends SketchCollector {

    static CONFIG = {
        id: "monsterzeug",
        name: "Monsterzeug",
        description: "i18n.collectors.monsterzeug.description",
        version: "0",
        website: "https://www.monsterzeug.de/account.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492243.jpg",
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
        entryUrl: "https://www.monsterzeug.de/account.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MonsterzeugCollector.CONFIG);
    }
}
