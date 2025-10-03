
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MaschinensucherCollector extends SketchCollector {

    static CONFIG = {
        id: "maschinensucher",
        name: "Maschinensucher",
        description: "i18n.collectors.maschinensucher.description",
        version: "0",
        website: "https://www.maschinensucher.de/user/contract/invoice-list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1352736.jpg",
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
        entryUrl: "https://www.maschinensucher.de/user/contract/invoice-list",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MaschinensucherCollector.CONFIG);
    }
}
