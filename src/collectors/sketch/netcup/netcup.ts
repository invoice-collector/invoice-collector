
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NetcupCollector extends SketchCollector {

    static CONFIG = {
        id: "netcup",
        name: "netcup",
        description: "i18n.collectors.netcup.description",
        version: "0",
        website: "https://ccp.netcup.net/run/start.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3073.jpg",
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
        entryUrl: "https://ccp.netcup.net/run/start.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NetcupCollector.CONFIG);
    }
}
