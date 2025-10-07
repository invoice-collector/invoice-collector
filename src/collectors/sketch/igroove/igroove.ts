
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IgrooveCollector extends SketchCollector {

    static CONFIG = {
        id: "igroove",
        name: "iGroove",
        description: "i18n.collectors.igroove.description",
        version: "0",
        website: "https://app.igroovemusic.com/me/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1622001.jpg",
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
        entryUrl: "https://app.igroovemusic.com/me/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IgrooveCollector.CONFIG);
    }
}
