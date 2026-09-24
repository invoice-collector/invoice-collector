
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType, CollectorAuthenticationMethod } from '../../abstractCollector';

export class NvidiaCollector extends SketchCollector {

    static CONFIG = {
        id: 'nvidia',
        name: 'NVIDIA',
        description: 'i18n.collectors.nvidia.description',
        version: '0',
        website: 'http://www.nvidia.de/page/home.html',
        logo: 'https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65623.jpg',
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: 'email',
                name: 'i18n.collectors.all.email',
                placeholder: 'i18n.collectors.all.email.placeholder',
                mandatory: true,
            },
            password: {
                type: 'password',
                name: 'i18n.collectors.all.password',
                placeholder: 'i18n.collectors.all.password.placeholder',
                mandatory: true,
            },
        },
        loginUrl: 'http://www.nvidia.de/page/home.html',
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.PLANNED,
    };

    /**
     * Constructs a new instance of the NvidiaCollector class.
     */
    constructor() {
        super(NvidiaCollector.CONFIG);
    }
}
