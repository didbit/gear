(function() {var implementors = {};
implementors["gstd"] = [{"text":"impl <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"gstd/errors/enum.ContractError.html\" title=\"enum gstd::errors::ContractError\">ContractError</a>","synthetic":true,"types":["gstd::common::errors::ContractError"]},{"text":"impl <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/struct.ActorId.html\" title=\"struct gstd::ActorId\">ActorId</a>","synthetic":true,"types":["gstd::common::primitives::ActorId"]},{"text":"impl <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/struct.MessageId.html\" title=\"struct gstd::MessageId\">MessageId</a>","synthetic":true,"types":["gstd::common::primitives::MessageId"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/lock/mutex/struct.Mutex.html\" title=\"struct gstd::lock::mutex::Mutex\">Mutex</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["gstd::lock::mutex::Mutex"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/lock/mutex/struct.MutexGuard.html\" title=\"struct gstd::lock::mutex::MutexGuard\">MutexGuard</a>&lt;'a, T&gt;","synthetic":true,"types":["gstd::lock::mutex::MutexGuard"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/lock/mutex/struct.MutexLockFuture.html\" title=\"struct gstd::lock::mutex::MutexLockFuture\">MutexLockFuture</a>&lt;'a, T&gt;","synthetic":true,"types":["gstd::lock::mutex::MutexLockFuture"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/lock/rwlock/struct.RwLock.html\" title=\"struct gstd::lock::rwlock::RwLock\">RwLock</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["gstd::lock::rwlock::RwLock"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/lock/rwlock/struct.RwLockReadGuard.html\" title=\"struct gstd::lock::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, T&gt;","synthetic":true,"types":["gstd::lock::rwlock::RwLockReadGuard"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/lock/rwlock/struct.RwLockWriteGuard.html\" title=\"struct gstd::lock::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, T&gt;","synthetic":true,"types":["gstd::lock::rwlock::RwLockWriteGuard"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/lock/rwlock/struct.RwLockReadFuture.html\" title=\"struct gstd::lock::rwlock::RwLockReadFuture\">RwLockReadFuture</a>&lt;'a, T&gt;","synthetic":true,"types":["gstd::lock::rwlock::RwLockReadFuture"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/lock/rwlock/struct.RwLockWriteFuture.html\" title=\"struct gstd::lock::rwlock::RwLockWriteFuture\">RwLockWriteFuture</a>&lt;'a, T&gt;","synthetic":true,"types":["gstd::lock::rwlock::RwLockWriteFuture"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/msg/struct.CodecMessageFuture.html\" title=\"struct gstd::msg::CodecMessageFuture\">CodecMessageFuture</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["gstd::msg::async::CodecMessageFuture"]},{"text":"impl <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/msg/struct.MessageFuture.html\" title=\"struct gstd::msg::MessageFuture\">MessageFuture</a>","synthetic":true,"types":["gstd::msg::async::MessageFuture"]},{"text":"impl <a class=\"trait\" href=\"gstd/prelude/marker/trait.Unpin.html\" title=\"trait gstd::prelude::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"gstd/msg/struct.MessageHandle.html\" title=\"struct gstd::msg::MessageHandle\">MessageHandle</a>","synthetic":true,"types":["gstd::msg::basic::MessageHandle"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()