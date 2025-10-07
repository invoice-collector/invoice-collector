
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MinterIoCollector extends SketchCollector {

    static CONFIG = {
        id: "minter_io",
        name: "minter.io",
        description: "i18n.collectors.minter_io.description",
        version: "0",
        website: "https://minter.io/payment/in_1EY83nF8TNScfXnTDEIdJFLR/in_1EY83nF8TNScfXnTDEIdJFLR",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135330.jpg",
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
        entryUrl: "https://minter.io/payment/in_1EY83nF8TNScfXnTDEIdJFLR/in_1EY83nF8TNScfXnTDEIdJFLR",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MinterIoCollector.CONFIG);
    }
}
