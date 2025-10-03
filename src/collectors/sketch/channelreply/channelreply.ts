
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ChannelreplyCollector extends SketchCollector {

    static CONFIG = {
        id: "channelreply",
        name: "ChannelReply",
        description: "i18n.collectors.channelreply.description",
        version: "0",
        website: "https://www.channelreply.com/manage#manage-billing-info",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16856.jpg",
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
        entryUrl: "https://www.channelreply.com/manage#manage-billing-info",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChannelreplyCollector.CONFIG);
    }
}
