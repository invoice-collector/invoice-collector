
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HostodoCollector extends SketchCollector {

    static CONFIG = {
        id: "hostodo",
        name: "Hostodo",
        description: "i18n.collectors.hostodo.description",
        version: "0",
        website: "https://hostodo.com/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10944.jpg",
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
        entryUrl: "https://hostodo.com/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HostodoCollector.CONFIG);
    }
}
