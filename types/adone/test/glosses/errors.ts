namespace ErrorsTests {
    { const a: Error = new adone.error.Exception(); }
    { const a: Error = new adone.error.Exception("message"); }
    { const a: Error = new adone.error.Exception(new Error()); }
    { const a: Error = new adone.error.Exception(new Error(), true); }
    { const a: adone.error.Exception = new adone.error.Runtime(); }
    { const a: adone.error.Exception = new adone.error.IncompleteBufferError(); }
    { const a: adone.error.Exception = new adone.error.NotImplemented(); }
    { const a: adone.error.Exception = new adone.error.IllegalState(); }
    { const a: adone.error.Exception = new adone.error.NotValid(); }
    { const a: adone.error.Exception = new adone.error.Unknown(); }
    { const a: adone.error.Exception = new adone.error.NotExists(); }
    { const a: adone.error.Exception = new adone.error.Exists(); }
    { const a: adone.error.Exception = new adone.error.Empty(); }
    { const a: adone.error.Exception = new adone.error.InvalidAccess(); }
    { const a: adone.error.Exception = new adone.error.NotSupported(); }
    { const a: adone.error.Exception = new adone.error.InvalidArgument(); }
    { const a: adone.error.Exception = new adone.error.InvalidNumberOfArguments(); }
    { const a: adone.error.Exception = new adone.error.NotFound(); }
    { const a: adone.error.Exception = new adone.error.Timeout(); }
    { const a: adone.error.Exception = new adone.error.Incorrect(); }
    { const a: adone.error.Exception = new adone.error.NotAllowed(); }
    { const a: adone.error.Exception = new adone.error.LimitExceeded(); }
    { const a: adone.error.Exception = new adone.error.Encoding(); }
    { const a: adone.error.Exception = new adone.error.Network(); }
    { const a: adone.error.Exception = new adone.error.Bind(); }
    { const a: adone.error.Exception = new adone.error.Connect(); }
    { const a: adone.error.Exception = new adone.error.Database(); }
    { const a: adone.error.Exception = new adone.error.DatabaseInitialization(); }
    { const a: adone.error.Exception = new adone.error.DatabaseOpen(); }
    { const a: adone.error.Exception = new adone.error.DatabaseRead(); }
    { const a: adone.error.Exception = new adone.error.DatabaseWrite(); }
    { const a: adone.error.Exception = new adone.error.NetronIllegalState(); }
    { const a: adone.error.Exception = new adone.error.NetronPeerDisconnected(); }
    { const a: adone.error.Exception = new adone.error.NetronTimeout(); }
}
