@extends('layouts.app')

@section('content')
    @foreach($companies as $company)
    <h1>{{ $company->name }}</h1>
    <div class="modal-form">
        <form name="form{{ $company->id }}" action="{{ route('userlist.store') }}" method="post" onsubmit="return createUser(event, {{ $company->id }})">
            <h3>This is for ajax</h3>
            {{ csrf_field() }}
            <input type="hidden" name="company_id" value="{{ $company->id }}"/>
            <label>Name</label><input type="text" name="name" />
            <label>Email</label><input type="text" name="email" />
            <label>Password</label><input type="text" name="password" />
            <label>Confirm</label><input type="text" name="password_confirmation" />
            <button>OK</button>
        </form>
    </div>

    <h3>Member</h3>
    <ul>
        @foreach($company->members() as $member)
            <li>
                {{ $member->name }} in {{ $company->name }}
            </li>
        @endforeach
    </ul>

    <h3>Manager</h3>
    <ul>
        @foreach($company->managers() as $manager)
            <li>
                {{ $manager->name }} in {{ $company->name }}
            </li>
        @endforeach
    </ul>
    @endforeach

    <script>
        function createUser(e, id) {
            e.preventDefault();

            var formData = document['form' + id];

            axios.post('{{ route("userlist.store") }}', {
                company_id: formData['company_id'].value,
                name: formData['name'].value,
                email: formData['email'].value,
                password: formData['password'].value,
                password_confirmation: formData['password_confirmation'].value,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

            return false;
        }
    </script>
@endsection
