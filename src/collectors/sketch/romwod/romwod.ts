
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RomwodCollector extends SketchCollector {

    static CONFIG = {
        id: "romwod",
        name: "ROMWOD",
        description: "i18n.collectors.romwod.description",
        version: "0",
        website: "https://app.romwod.com/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47985.jpg",
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
        entryUrl: "https://app.romwod.com/users/sign_in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RomwodCollector.CONFIG);
    }
}
