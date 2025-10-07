
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FunnelTunnelCollector extends SketchCollector {

    static CONFIG = {
        id: "funnel_tunnel",
        name: "funnel-tunnel",
        description: "i18n.collectors.funnel_tunnel.description",
        version: "0",
        website: "https://bernhard-5.funnel-tunnel.com/me/settings/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2636540.jpg",
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
        entryUrl: "https://bernhard-5.funnel-tunnel.com/me/settings/billing/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FunnelTunnelCollector.CONFIG);
    }
}
