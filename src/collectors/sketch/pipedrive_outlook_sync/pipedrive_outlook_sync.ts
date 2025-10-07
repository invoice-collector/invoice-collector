
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PipedriveOutlookSyncCollector extends SketchCollector {

    static CONFIG = {
        id: "pipedrive_outlook_sync",
        name: "Pipedrive Outlook Sync",
        description: "i18n.collectors.pipedrive_outlook_sync.description",
        version: "0",
        website: "https://app.pipedriveoutlooksync.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11202.jpg",
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
        entryUrl: "https://app.pipedriveoutlooksync.com/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PipedriveOutlookSyncCollector.CONFIG);
    }
}
