
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CometBackupCollector extends SketchCollector {

    static CONFIG = {
        id: "comet_backup",
        name: "Comet Backup",
        description: "i18n.collectors.comet_backup.description",
        version: "0",
        website: "https://account.cometbackup.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/385995.jpg",
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
        entryUrl: "https://account.cometbackup.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CometBackupCollector.CONFIG);
    }
}
