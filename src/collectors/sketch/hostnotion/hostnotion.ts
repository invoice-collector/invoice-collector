
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HostnotionCollector extends SketchCollector {

    static CONFIG = {
        id: "hostnotion",
        name: "Hostnotion",
        description: "i18n.collectors.hostnotion.description",
        version: "0",
        website: "https://hostnotion.co/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/955983.jpg",
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
        entryUrl: "https://hostnotion.co/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HostnotionCollector.CONFIG);
    }
}
