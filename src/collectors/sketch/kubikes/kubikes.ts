
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KubikesCollector extends SketchCollector {

    static CONFIG = {
        id: "kubikes",
        name: "Kubikes",
        description: "i18n.collectors.kubikes.description",
        version: "0",
        website: "https://www.kubikes.de/kubikes_shop/account.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2063537.jpg",
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
        entryUrl: "https://www.kubikes.de/kubikes_shop/account.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KubikesCollector.CONFIG);
    }
}
