
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FeaturemapCollector extends SketchCollector {

    static CONFIG = {
        id: "featuremap",
        name: "FeatureMap",
        description: "i18n.collectors.featuremap.description",
        version: "0",
        website: "https://www.featuremap.co/subscription/aHR0cHM6Ly9mZWF0dXJlbWFwLWV1ci5wcm9hYm9uby5jb20vcG9ydGFsLWNvbnRhY3Qvdk93d09NU0V6UURCSjlVTmJqN090TkpQRFk5RUhSOXFLTDBXb3NkVUxBZ2dUdUk3MEFPM3Zmc0c4aDk5R0xnQ1hZcXBlV2QzQVVGaWZCVkVjRnhyd2MzWEtiN1BUSjhxYVIwMGVBVGljcWs%3d",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396400.jpg",
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
        loginUrl: "https://www.featuremap.co/subscription/aHR0cHM6Ly9mZWF0dXJlbWFwLWV1ci5wcm9hYm9uby5jb20vcG9ydGFsLWNvbnRhY3Qvdk93d09NU0V6UURCSjlVTmJqN090TkpQRFk5RUhSOXFLTDBXb3NkVUxBZ2dUdUk3MEFPM3Zmc0c4aDk5R0xnQ1hZcXBlV2QzQVVGaWZCVkVjRnhyd2MzWEtiN1BUSjhxYVIwMGVBVGljcWs%3d",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FeaturemapCollector.CONFIG);
    }
}
