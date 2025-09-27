
import { SketchCollector } from '../../sketchCollector';

export class RemotepcCollector extends SketchCollector {

    static CONFIG = {
        id: "remotepc",
        name: "remotepc",
        description: "i18n.collectors.remotepc.description",
        version: "0",
        website: "https://login.remotepc.com/rpcnew/account?page=billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2144528.jpg",
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
        entryUrl: "https://login.remotepc.com/rpcnew/account?page=billing",
    }

    constructor() {
        super(RemotepcCollector.CONFIG);
    }
}
