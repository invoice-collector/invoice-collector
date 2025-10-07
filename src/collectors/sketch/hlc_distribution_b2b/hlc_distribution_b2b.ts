
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HlcDistributionB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "hlc_distribution_b2b",
        name: "HLC Distribution - B2B",
        description: "i18n.collectors.hlc_distribution_b2b.description",
        version: "0",
        website: "https://b2b.hlcdist.com/my/invoices?access_token=bdf2a162-bd15-4f16-9113-48f177199e06",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4355631.jpg",
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
        entryUrl: "https://b2b.hlcdist.com/my/invoices?access_token=bdf2a162-bd15-4f16-9113-48f177199e06",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HlcDistributionB2bCollector.CONFIG);
    }
}
