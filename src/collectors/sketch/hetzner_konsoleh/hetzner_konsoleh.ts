
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HetznerKonsolehCollector extends SketchCollector {

    static CONFIG = {
        id: "hetzner_konsoleh",
        name: "Hetzner - konsoleH",
        description: "i18n.collectors.hetzner_konsoleh.description",
        version: "0",
        website: "https://accounts.hetzner.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7619.jpg",
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
        entryUrl: "https://accounts.hetzner.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HetznerKonsolehCollector.CONFIG);
    }
}
