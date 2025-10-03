
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WinestroCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "winestro_cloud",
        name: "Winestro.cloud",
        description: "i18n.collectors.winestro_cloud.description",
        version: "0",
        website: "https://nephele-s5.de/program.php?p=51000",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1438953.jpg",
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
        entryUrl: "https://nephele-s5.de/program.php?p=51000",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WinestroCloudCollector.CONFIG);
    }
}
