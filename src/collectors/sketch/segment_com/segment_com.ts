
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SegmentComCollector extends SketchCollector {

    static CONFIG = {
        id: "segment_com",
        name: "Segment.com",
        description: "i18n.collectors.segment_com.description",
        version: "0",
        website: "https://app.segment.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20483.jpg",
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
        entryUrl: "https://app.segment.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SegmentComCollector.CONFIG);
    }
}
