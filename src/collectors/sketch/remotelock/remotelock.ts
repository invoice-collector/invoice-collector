
import { SketchCollector } from '../../sketchCollector';

export class RemotelockCollector extends SketchCollector {

    static CONFIG = {
        id: "remotelock",
        name: "RemoteLOCK",
        description: "i18n.collectors.remotelock.description",
        version: "0",
        website: "https://connect.devicewebmanager.com/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/67214.jpg",
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
        entryUrl: "https://connect.devicewebmanager.com/sign-in",
    }

    constructor() {
        super(RemotelockCollector.CONFIG);
    }
}
