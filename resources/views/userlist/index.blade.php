@foreach($companies as $company)
<div class="modal">
    <form action="{{ route('userlist.store') }}" method="post">
        <h3>This is for ajax</h3>
        {{ csrf_field() }}
        <input type="hidden" name="company_id" value="{{ $company->id }}"/>
        <input type="text" name="name" />
    </form>
</div>
<ul>
    @foreach($company->members as $member)
        <li>
            {{ $member->name }} in {{ $company->name }}
        </li>
    @endforeach
</ul>
@endforeach
